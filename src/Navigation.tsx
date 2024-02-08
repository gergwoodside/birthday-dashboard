import React from "react";

interface Props {
  currentView: string;
  onSelectView: (item: string) => void;
}

const Navigation = ({ currentView, onSelectView }: Props) => {
  return (
    <div className="nav">
      <button
        className={
          currentView === "Dashboard"
            ? "btn btn-primary"
            : "btn btn-outline-primary"
        }
        onClick={() => onSelectView("Dashboard")}
      >
        Dashboard
      </button>
      <button
        className={
          currentView === "Configuration"
            ? "btn btn-primary"
            : "btn btn-outline-primary"
        }
        onClick={() => onSelectView("Configuration")}
      >
        Configuration
      </button>
    </div>
  );
};

export default Navigation;
