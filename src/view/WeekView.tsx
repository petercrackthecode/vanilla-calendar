import Day from '../components/Day'

export default function WeekView({
  weekdays,
  currentDayOfTheMonth,
}: {
  weekdays: { dayOfTheMonth: number; dayOfTheWeek: string }[]
  currentDayOfTheMonth: number
}) {
  const AllDays = Array.from(Array(7).keys()).map((_, index) =>
    Day({
      key: index,
      dayOfTheMonth: weekdays[index].dayOfTheMonth,
      dayOfTheWeek: weekdays[index].dayOfTheWeek,
      isToday: weekdays[index].dayOfTheMonth === currentDayOfTheMonth,
    })
  )

  return <div className="grid grid-cols-7 divide-x">{AllDays}</div>
}
