import React from "react";

interface Birthday {
  name: string;
  date: string;
}

interface Props {
  birthdays: Birthday[];
}

const BirthdayList = ({ birthdays }: Props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Birthday</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {birthdays.map((birthday) => (
          <tr key={birthday.name}>
            <td>{birthday.name}</td>
            <td>{birthday.date}</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BirthdayList;
