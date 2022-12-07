import './App.css'
import WeekView from './view/WeekView'
import weekday from 'dayjs/plugin/weekday'
import dayjs from 'dayjs'

dayjs.extend(weekday)

const DAY_JS = dayjs()

console.log('today = ', dayjs().format('D'))

function App() {
  let weekdays = []
  const currentDayOfTheMonth = parseInt(DAY_JS.format('D'))
  for (let daysFromSunday = 0; daysFromSunday < 7; ++daysFromSunday) {
    weekdays.push({
      dayOfTheMonth: parseInt(DAY_JS.weekday(daysFromSunday).format('D')),
      dayOfTheWeek: DAY_JS.weekday(daysFromSunday).format('ddd').toUpperCase(),
    })
  }
  return (
    <div className="App">
      <WeekView {...{ weekdays, currentDayOfTheMonth }} />
    </div>
  )
}

export default App
