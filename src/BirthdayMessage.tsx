import React from "react";

interface Birthday {
  name: string;
  date: string;
}

interface Props {
  birthdays: Birthday[];
  today: string;
}

export const BirthdayMessage = ({ birthdays, today }: Props) => {
  for (const people of birthdays) {
    if (people.date.slice(-5) === today.slice(-5)) {
      return (
        <p className="birthday-message">
          {people.name} turns{" "}
          {parseInt(today.slice(0, 4)) - parseInt(people.date.slice(0, 4))}{" "}
          today!
        </p>
      );
    }
  }
};

export default BirthdayMessage;
