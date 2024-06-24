import { addDays, addHours, addWeeks } from 'date-fns'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTimer } from '../contexts/timer'

type TimeLength = `${number}w` | `${number}d` | `${number}h`

interface Props {
  id?: string
  name: string
  reference: string // timestamp
  reset: TimeLength[]
  resetText?: string
  offset?: TimeLength[]
  offsetText?: string
  disabled?: boolean
  status?: string
}

function AddTime(_date: Date, interval: TimeLength) {
  const date = new Date(_date)
  const unit = interval.substring(interval.length - 1)
  const amount = Number(interval.substring(0, interval.length - 1))

  let addX = null
  switch (unit) {
    case 'w':
      addX = addWeeks
      break

    case 'd':
      addX = addDays
      break

    case 'h':
      addX = addHours
      break
  }

  return addX ? addX(date, amount) : date
}

function MsToDaysHoursMinsSeconds(ms: number) {
  let seconds = Math.floor(ms / 1000)
  let minutes = Math.floor(seconds / 60)
  seconds %= 60

  let hours = Math.floor(minutes / 60)
  minutes %= 60

  const days = Math.floor(hours / 24)
  hours %= 24

  return [
    { num: days, unit: 'd' },
    { num: hours, unit: 'h' },
    { num: minutes, unit: 'm' },
    { num: seconds, unit: 's' },
  ]
}

export function Timer({
  name,
  reference,
  reset,
  resetText,
  offset = [],
  offsetText,
  disabled,
  status,
}: Props) {
  const FindNextDeadline = useCallback(
    function () {
      // figure out the next timestamp
      function Check(date: Date, doneOffset = true) {
        const _diff = new Date().getTime() - date.getTime()
        if (_diff > 0) {
          // the reference date is still behind now
          if (doneOffset) {
            return Check(
              reset.reduce((_date, int) => AddTime(_date, int), date),
              false,
            )
          }

          return Check(offset.reduce((_date, int) => AddTime(_date, int), date))
        }

        if (doneOffset) {
          SetOffset(true)
          return date
        }

        SetOffset(false)
        return date
      }

      return Check(new Date(reference))
    },
    [reset, offset, reference],
  )

  const [diff, SetDifference] = useState(0)
  const [isOffset, SetOffset] = useState(false)
  const [deadline, SetDeadline] = useState(new Date())
  const tick = useTimer()

  useEffect(() => {
    const diff = deadline.getTime() - new Date().getTime()
    if (diff <= 0) {
      SetDeadline(FindNextDeadline())
    }

    SetDifference(diff)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tick])

  const splitTimes = useMemo(() => MsToDaysHoursMinsSeconds(diff), [diff])

  const renderTimeComponents = splitTimes.map(({ num, unit }) => (
    <span key={unit} className="text-[hsla(0,0%,100%,.15)]">
      {num === 0 && `0${num} ${unit}`}
      {num > 0 && num < 10 && (
        <>
          0
          <span className="text-white">
            {num}&nbsp;{unit}
          </span>
        </>
      )}
      {num >= 10 && (
        <span className="text-white">
          {num}&nbsp;
          {unit}
        </span>
      )}
      &nbsp;
    </span>
  ))

  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl text-orange-dark mb-2 sm:text-2xl">
        {name}&nbsp;
        {!disabled && isOffset && offsetText && offsetText}
        {!disabled && !isOffset && resetText && resetText}
      </h1>

      {!disabled ? (
        <>
          <span className="text-[1.7rem] sm:text-4xl">
            {renderTimeComponents}
          </span>
          <br />
          <br />
          <span className="text-lg text-[hsla(0,0%,100%,.15)] sm:text-[1.6rem] md:text-[2rem] lg:text-2xl">
            {deadline.toLocaleDateString(undefined, {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
            ,&nbsp;
            {deadline.toLocaleTimeString(undefined, {
              hour12: true,
              hour: 'numeric',
              minute: 'numeric',
              timeZoneName: 'short',
            })}
          </span>
        </>
      ) : (
        <span className="text-[1.7rem]">
          <span className="text-white">{status}</span>
        </span>
      )}
    </div>
  )
}
