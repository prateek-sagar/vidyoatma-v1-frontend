import "../css/DashboardHome.css";
import InstitutionHome from "../institutionComponents/InstitutionHome";
import SliderForm from "../sharedcomponents/FormSlider";

function DashboardHome() {
  return (
    <div className="home-container">
      <SliderForm />
      <InstitutionHome />
    </div>
  );
}

export default DashboardHome;
