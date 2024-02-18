import moment from "moment";
import React, { FormEvent } from "react";

interface Person {
  date: string;
  name: string;
}

interface Props {
  handleSubmit: (event: FormEvent) => void;
  person: Person;
  setPerson: (event: React.ChangeEvent<HTMLInputElement>) => void;
  today: string;
}

const BirthdayForm = ({ handleSubmit, person, setPerson, today }: Props) => {
  return (
    <>
      <h1 className="text-center m-3">🎂 Birthday Tracker 🎂</h1>
      <div className="p-3">
        <strong>Instructions:</strong> Enter the name and birthday of all people
        you love and/or care about. <br className="my-6" /> Be a good friend.
        Remember their birthday.
      </div>
      <div className="p-3">
        <form id="person-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:{" "}
            </label>
            <input
              onChange={setPerson}
              name="name"
              id="name"
              type="text"
              className="form-control"
              value={person.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Birthday:{" "}
            </label>
            <input
              onChange={setPerson}
              id="date"
              name="date"
              type="date"
              className="form-control"
              value={person.date}
              max={today}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default BirthdayForm;
