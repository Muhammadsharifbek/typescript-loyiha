import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/blog/filter=11">Blog</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default RootLayout;
