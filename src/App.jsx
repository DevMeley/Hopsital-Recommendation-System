import "./App.css";
import MainPage from "./components/MainPage";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="App">
        <div className="main-content">
        <SideBar />
        <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
