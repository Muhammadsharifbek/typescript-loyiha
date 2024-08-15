import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import RootLayout from "./layout/RootLayout";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import { IUser } from "./shared/interfaces/user.interface";
import ProtectRoute from "./guards/ProtectRoute";
import Login from "./pages/Login";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  const handeLogin = () => {
    setUser({ name: "asdads", id: "333", roles: "admin" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <>
      {user ? <button onClick={handleLogout}>Logout</button> : <button onClick={handeLogin}>Login</button>}
      <button onClick={handleAboutClick}>Go</button>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<ProtectRoute IsAllowed={Boolean(user?.roles.includes("admin"))} children={undefined} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectRoute IsAllowed={Boolean(user)} children={undefined} />}>
            <Route path="/contacts" element={<Contacts />} />

            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog/:slug" element={<Blog />} />
          </Route>
          <Route path="/profile" element={<Profile />}>
            <Route index element={<h1>Select profile</h1>} />
            <Route path="details" element={<h1> profile details</h1>} />
            <Route path="settings" element={<h1> profile settings</h1>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
