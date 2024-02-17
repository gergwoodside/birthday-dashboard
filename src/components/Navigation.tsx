interface Props {
  currentView: string;
  onSelectView: (item: string) => void;
}

const Navigation = ({ currentView, onSelectView }: Props) => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={
              currentView === "Dashboard" ? "nav-link active" : "nav-link"
            }
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => onSelectView("Dashboard")}
          >
            Dashboard
          </button>
          <button
            className={
              currentView === "Configuration" ? "nav-link active" : "nav-link"
            }
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
            onClick={() => onSelectView("Configuration")}
          >
            Configuration
          </button>
          <button
            className={
              currentView === "Sign-In" ? "nav-link active" : "nav-link"
            }
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
            onClick={() => onSelectView("Sign-In")}
          >
            Sign-In
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
