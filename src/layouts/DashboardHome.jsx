import "../css/DashboardHome.css";
import InstitutionHome from "../institutionComponents/InstitutionHome";
import store from "../redux/store";
import institutionStore from "../redux/institutionStore";

function DashboardHome() {
  console.log(institutionStore.getState());
  return (
    <div className="home-container">
      {/* user information and link to change it if needed */}
      <div className="institution-details">
        <p>{institutionStore.getState().name}</p>
        <p>{store.getState().id}</p>
        <p>{institutionStore.getState().city}</p>
        <p></p>
      </div>
      {/* the below section will be changed */}
      <InstitutionHome />
    </div>
  );
}

export default DashboardHome;
