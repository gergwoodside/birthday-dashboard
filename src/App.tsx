import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import BirthdayList from "./components/BirthdayList";
import BirthdayForm from "./components/BirthdayForm";

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

  return (
    <>
      <Navigation currentView={currentView} onSelectView={setCurrentView} />
      {currentView === "Configuration" && (
        <>
          <div className="birthday-form">
            <BirthdayForm
              handleSubmit={handleSubmit}
              person={person}
              setPerson={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                setPerson((prev) => ({ ...prev, [name]: value }));
              }}
            />
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
