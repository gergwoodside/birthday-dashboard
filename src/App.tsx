import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import BirthdayList from "./components/BirthdayList";

interface Birthday {
  id: number;
  name: string;
  date: string;
}

function App() {
  const [currentView, setCurrentView] = useState("Dashboard");
  const [birthdays, setBirthdays] = useState<Birthday[]>(
    JSON.parse(localStorage.getItem("BIRTHDAY_LIST") as string) || []
  );
  const [person, setPerson] = useState({
    name: "",
    date: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newPerson = { ...person, id: new Date().getTime() }; // Add a unique ID
    setBirthdays([...birthdays, newPerson]);
    setPerson({ name: "", date: "" }); // Reset the person object
  };

  const handleDelete = (id: number) => {
    setBirthdays(birthdays.filter((birthday) => birthday.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem("BIRTHDAY_LIST", JSON.stringify(birthdays));
  }, [birthdays]);

  useEffect(() => {
    const data = window.localStorage.getItem("BIRTHDAY_LIST");
    if (data) {
      console.log(JSON.parse(data));
      setBirthdays(JSON.parse(data));
    }
  }, []);

  return (
    <>
      <Navigation currentView={currentView} onSelectView={setCurrentView} />
      {currentView === "Configuration" && (
        <>
          <div className="birthdayForm">
            <form id="person-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:{" "}
                </label>
                <input
                  onChange={(event) =>
                    setPerson({ ...person, name: event.target.value })
                  }
                  id="name"
                  type="text"
                  className="form-control"
                  value={person.name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date:{" "}
                </label>
                <input
                  onChange={(event) =>
                    setPerson({ ...person, date: event.target.value })
                  }
                  id="date"
                  type="date"
                  className="form-control"
                  value={person.date}
                />
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="birthdayList">
            <BirthdayList birthdays={birthdays} onDelete={handleDelete} />
          </div>
        </>
      )}
      {currentView === "Dashboard" && <Dashboard birthdays={birthdays} />}
    </>
  );
}

export default App;
