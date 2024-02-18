import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import { formattedDate } from "./components/CurrentTime";
import BirthdayList from "./components/BirthdayList";
import BirthdayForm from "./components/BirthdayForm";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/auth/AuthDetails";
import {
  addDoc,
  deleteDoc,
  collection,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import UpdateUser from "./components/auth/UpdateUser";

interface Birthday {
  id: string;
  personName: string;
  date: string;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState("Dashboard");
  const [birthdays, setBirthdays] = useState<Birthday[]>([]);
  const [person, setPerson] = useState({
    name: "",
    date: "",
  });
  const birthdayCollectionRef = collection(db, "birthdays");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await addDoc(birthdayCollectionRef, {
      personName: person.name,
      date: person.date,
      createdById: auth?.currentUser?.uid,
    });
    getBirthdayList();
    setPerson({ name: "", date: "" }); // Reset the person object
  };

  const handleDelete = async (id: string) => {
    const birthdayDoc = doc(db, "birthdays", id);
    await deleteDoc(birthdayDoc);
    getBirthdayList();
  };

  const getBirthdayList = async () => {
    setIsLoggedIn(true);
    try {
      const data = await getDocs(
        query(
          birthdayCollectionRef,
          where("createdById", "==", auth.currentUser?.uid)
        )
      );
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Birthday[];
      console.log({ filteredData });
      setBirthdays(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    auth.currentUser != null && getBirthdayList;
  });

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      user == null ? setBirthdays([]) : getBirthdayList();
      user == null ? setIsLoggedIn(false) : setIsLoggedIn(true);
      setCurrentView("Dashboard");
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <>
      <Navigation
        loggedIn={isLoggedIn}
        currentView={currentView}
        onSelectView={setCurrentView}
      />
      {currentView === "Configuration" && (
        <>
          <div className="birthday-form">
            <BirthdayForm
              today={formattedDate}
              handleSubmit={handleSubmit}
              person={person}
              setPerson={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                setPerson((prev) => ({ ...prev, [name]: value }));
              }}
            />
          </div>
          <div className="birthdayList">
            {birthdays.length > 0 && (
              <BirthdayList birthdays={birthdays} onDelete={handleDelete} />
            )}
          </div>
        </>
      )}
      {currentView === "Dashboard" && (
        <Dashboard loggedIn={isLoggedIn} birthdays={birthdays} />
      )}
      {currentView === "Account" && (
        <>
          <AuthDetails />
          <UpdateUser />
        </>
      )}
    </>
  );
}

export default App;
