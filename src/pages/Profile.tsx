import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/profile/details"}>Profile Details</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/profile/settings"}>Profile settings</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Profile;
