import { Link } from "react-router-dom";
import Header from "../components/organism/Header";
import SecctionTabs from "../components/organism/SecctionTabs";
import "../assets/styles/LandingPage.css"

function Landing() {
  return (
    <>
      <Header/>
      <SecctionTabs/>
    </>
  );
}
export default Landing;