import "./App.css";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <SideBar />
      <Feed />
      <RightBar />
    </div>
  );
}

export default App;
