interface Birthday {
  name: string;
  date: string;
}

interface Props {
  birthdays: Birthday[];
  today: string;
}

import React from "react";

interface Birthday {
  name: string;
  date: string;
}

interface Props {
  birthdays: Birthday[];
  today: string; // Assuming 'today' is a string in the format 'YYYY-MM-DD'
}

export const BirthdayMessage = ({ birthdays, today }: Props) => {
  // Filter birthdays to find those that match 'today' and then map to JSX elements
  const birthdayMessages = birthdays
    .filter((person) => person.date.slice(-5) === today.slice(-5))
    .map((person) => (
      <p className="birthday-message" key={person.name}>
        {person.name} turns{" "}
        {parseInt(today.slice(0, 4)) - parseInt(person.date.slice(0, 4))} today!
      </p>
    ));

  // Return a fragment containing all matching birthday messages
  return <>{birthdayMessages}</>;
};

export default BirthdayMessage;
