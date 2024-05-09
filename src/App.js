import "./App.css";
import HeaderNavigation from "./components/Header/Header";
import MainCont from "./components/Main/MainCont";
import LeftMenu from "./components/SideBar/LefrMenu";
import Footer from "../src/components/Footer/Footer";
function App() {
  return (
    <>
      <HeaderNavigation />
      <MainCont />
      <Footer />
    </>
  );
}

export default App;
