import InsAllocation from "../institutionComponents/InsAllocation";
import InsAttendance from "../institutionComponents/InsAttendance";
import InsFinance from "../institutionComponents/InsFinance";
import InsNotifications from "../institutionComponents/InsNotifications";
import InsStudentPortfolio from "../institutionComponents/InsStudentPortfolio";
import InsTrackCourse from "../institutionComponents/InsTrackCourse";
import InsTsunami from "../institutionComponents/InsTsunami";
import store from "../redux/stores/userStore";

export function getFeature(params) {
  switch (store.getState().role) {
    case "INSTITUTION":
      switch (params.feature) {
        case "student_portfolio":
          return <InsStudentPortfolio />;
        case "track_course":
          return <InsTrackCourse />;
        case "notifications":
          return <InsNotifications />;
        case "attendance":
          return <InsAttendance />;
        case "finance":
          return <InsFinance />;
        case "allocation":
          return <InsAllocation />;
        case "tsunami":
          return <InsTsunami />;
        default:
          break;
      }

    default:
      break;
  }
}
