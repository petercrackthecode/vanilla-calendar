import { ReactElement } from "react";
import dayjs from "dayjs";

// function parseDate(date: Date): { dayInWeek: str; dayInMonth: Number } {}

function OneHourBlock(): ReactElement {
  return <div className="one-hour-block w-1/7 h-14">Hi</div>;
}

export default function Day({ date, key }: { date: Date; key: Number }) {
  // const { dayInWeek, dayInMonth } = parseDate(date);
  console.log(dayjs().format());
  return (
    <div className="day grid-cols-1 divide-y-2" key={key.toString()}>
      {Array.from(Array(24).keys()).map((_, index) => (
        <OneHourBlock key={index} />
      ))}
    </div>
  );
}
