interface Props {
  birthdays: Birthday[];
  today: string;
}

import moment from "moment";
import React from "react";

interface Birthday {
  id: number;
  name: string;
  date: string;
}

interface Props {
  birthdays: Birthday[];
  today: string; // Assuming 'today' is a string in the format 'YYYY-MM-DD'
}

export const BirthdayMessage = ({ birthdays, today }: Props) => {
  // Filter birthdays to find those that match 'today' and then map to JSX elements
  const todayBirthdays = birthdays.filter((person) => {
    return (
      moment(person.date).format("MM-DD") === moment(today).format("MM-DD")
    );
  });

  const noBirthdaysEntered = (
    <ul className="list-group">
      <li className="list-group-item">
        <h3 className="text-center set-birthdays-alert">
          No birthdays set, set birthdays in the Configuration menu.
        </h3>
      </li>
    </ul>
  );

  const noBirthdaysToday = (
    <ul className="list-group">
      <li className="list-group-item">
        <h1 className="display-5 text-center set-birthdays-alert">
          No birthdays today.
        </h1>
      </li>
    </ul>
  );

  const birthdayMessages = todayBirthdays.map((person) => (
    <ul key={person.id} className="list-group">
      <li key={person.id} className="list-group-item">
        <h1 className="display-5 text-center">
          {person.name} turns{" "}
          {parseInt(today.slice(0, 4)) - parseInt(person.date.slice(0, 4))}{" "}
          today!
        </h1>
      </li>
    </ul>
  ));

  // Return a fragment containing all matching birthday messages
  return (
    <>
      {birthdays.length === 0
        ? noBirthdaysEntered
        : todayBirthdays.length === 0
        ? noBirthdaysToday
        : birthdayMessages}
    </>
  );
};

export default BirthdayMessage;
