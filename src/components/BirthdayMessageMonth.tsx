import moment from "moment";
import React from "react";

interface Birthday {
  id: string;
  personName: string;
  date: string;
}

interface Props {
  birthdays: Birthday[];
  today: string; // Assuming 'today' is a string in the format 'YYYY-MM-DD'
}

export const BirthdayMessageMonth = ({ birthdays, today }: Props) => {
  // Filter birthdays to find those that match 'today' and then map to JSX elements
  const todayBirthdays = birthdays.filter((person) => {
    return (
      moment(person.date).format("M MM") === moment(today).format("M MM") &&
      moment(moment(person.date).format("MM-DD")).isAfter(
        moment(today).format("MM-DD")
      )
    );
  });

  const birthdayMessages = todayBirthdays.map((person) => (
    <>
      <h2 className="text-center pt-5">This month:</h2>
      <ul key={person.id} className="list-group">
        <li key={person.id} className="list-group-item">
          <h3 className="display-5 text-center">
            {person.personName} turns{" "}
            {parseInt(today.slice(0, 4)) - parseInt(person.date.slice(0, 4))} on
            the {moment(person.date).format("Do")}
          </h3>
        </li>
      </ul>
    </>
  ));

  // Return a fragment containing all matching birthday messages
  return <>{birthdays.length !== 0 && birthdayMessages}</>;
};

export default BirthdayMessageMonth;
