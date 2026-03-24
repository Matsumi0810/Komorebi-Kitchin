import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import MainContent from "./Pages/Home";
import NewsList from "./Pages/NewsList";
import Recruit from "./Pages/Recruit";
import MenuPage from "./Pages/Menu/MenuTopPage";
import MenuFair from "./Pages/Menu/MenuFair";
import MenuDrinks from "./Pages/Menu/MenuDrinks";
import MenuMorning from "./Pages/Menu/MenuMorning";
import MenuDesserts from "./Pages/Menu/MenuDesserts";
import Lunch from "./Pages/Menu/Lunch/Lunch";
import MemberRegistrationPage from "./Pages/MemberRegistrationPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainContent />} />
        <Route path="news" element={<NewsList />} />
        <Route path="recruit" element={<Recruit />} />
        <Route path="menu">
          <Route index element={<MenuPage />} />
          <Route path="fair" element={<MenuFair />} />
          <Route path="drinks" element={<MenuDrinks />} />
          <Route path="morning" element={<MenuMorning />} />
          <Route path="desserts" element={<MenuDesserts />} />
          <Route path="lunch" element={<Lunch />} />
        </Route>{" "}
        <Route path="/member-registration" element={<MemberRegistrationPage />} />
      </Route>
    </Routes>
  );
};

export default App;
