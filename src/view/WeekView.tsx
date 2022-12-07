import Day from "../components/Day";

export default function WeekView() {
  const AllDays = Array.from(Array(7).keys()).map((_, index) =>
    Day({ key: index })
  );

  return <div className="grid grid-cols-7 divide-x">{AllDays}</div>;
}
