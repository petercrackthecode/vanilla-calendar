import Day from "../components/Day";

export default function WeekView({ startDate, currentDate }) {
  const AllDays = Array.from(Array(7).keys()).map((_, index) => (
    <Day key={index} />
  ));

  return <div className="grid grid-cols-7 divide-y">{AllDays}</div>;
}
