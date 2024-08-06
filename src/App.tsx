import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import RootLayout from "./layout/RootLayout";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import { IUser } from "./shared/interfaces/user.interface";
import ProtectRoute from "./guards/ProtectRoute";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  const handeLogin = () => {
    setUser({ name: "asdads", id: "333", roles: "admin" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      {user ? <button onClick={handleLogout}>Logout</button> : <button onClick={handeLogin}>Login</button>}
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<ProtectRoute IsAllowed={Boolean(user?.roles.includes("admin"))} children={undefined} />} />
          <Route path="/about" element={<About />} />
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
    </BrowserRouter>
  );
}

export default App;
