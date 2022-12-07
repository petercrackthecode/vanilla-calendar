import React, { ReactElement } from 'react'

// function parseDate(date: Date): { dayInWeek: str; dayInMonth: Number } {}

function OneHourBlock(): ReactElement {
  return <div className="one-hour-block h-14"></div>
}

export default function Day({
  key,
  dayOfTheMonth,
  dayOfTheWeek,
  isToday,
}: {
  key: number
  dayOfTheMonth: number
  dayOfTheWeek: string
  isToday: boolean
}) {
  return (
    <div className="day grid-cols-1 divide-y" key={key.toString()}>
      <div className="day-header py-4">
        <p className={`font-normal text-sm ${isToday ? 'text-blue-400' : ''}`}>{dayOfTheWeek}</p>
        <div className="flex justify-center items-center">
          <div
            className={`text-2xl font-normal` + (isToday ? 'p-1 bg-blue-400 text-white' : '')}
            style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {dayOfTheMonth}
          </div>
        </div>
      </div>
      {Array.from(Array(24).keys()).map((_, index) => (
        <OneHourBlock key={index} />
      ))}
    </div>
  )
}
