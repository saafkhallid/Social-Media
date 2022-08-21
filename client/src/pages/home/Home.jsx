import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Righbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
export default Home;

