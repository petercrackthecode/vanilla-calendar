import React, { ReactElement } from "react";
import dayjs from "dayjs";

// function parseDate(date: Date): { dayInWeek: str; dayInMonth: Number } {}

function OneHourBlock(): ReactElement {
  return <div className="one-hour-block h-14">Hi</div>;
}

export default function Day({ key }: { key: Number }) {
  // const { dayInWeek, dayInMonth } = parseDate(date);
  return (
    <div className="day grid-cols-1 divide-y" key={key.toString()}>
      {Array.from(Array(24).keys()).map((_, index) => (
        <OneHourBlock key={index} />
      ))}
    </div>
  );
}
