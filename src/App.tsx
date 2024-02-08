import { FormEvent, useState } from "react";
import "./App.css";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import BirthdayList from "./BirthdayList";

interface Birthday {
  name: string;
  date: string;
}

function App() {
  const [currentView, setCurrentView] = useState("Dashboard");
  const [birthdays, setBirthdays] = useState<Birthday[]>([
    { name: "Greg", date: "1997-02-07" },
    { name: "Hallie", date: "2024-02-07" },
  ]);
  const [person, setPerson] = useState({
    name: "",
    date: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
    setBirthdays([...birthdays, person]);
  };

  return (
    <>
      <Navigation currentView={currentView} onSelectView={setCurrentView} />
      {currentView === "Configuration" && (
        <>
          <div className="birthdayForm">
            <form onSubmit={handleSubmit}>
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
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="birthdayList">
            <BirthdayList birthdays={birthdays} />
          </div>
        </>
      )}
      {currentView === "Dashboard" && <Dashboard birthdays={birthdays} />}
    </>
  );
}

export default App;
