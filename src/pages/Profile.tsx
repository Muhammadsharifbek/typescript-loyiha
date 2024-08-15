import { RootState as ReactState } from "../redux/store";
export { userSuccess } from "../redux/action";
import { connect, ConnectProps } from "react-redux";
import { useEffect } from "react";
import { userSuccess } from "../redux/action";

type ReduxProps = ConnectProps<typeof connector>;
// type ComponentProps = {
//   isActive: boolean;
// };

type Props = ReduxProps;

function Profile(props: Props) {
  useEffect(() => {
    setTimeout(() => {
      props.userSuccess({ name: "Muhammadsharif", id: "333", roles: "admin" });
    });
  });

  return <div>Profile Page</div>;
}

const mapStateProps = (state: ReactState) => state;

const mapLocationProps = {
  userSuccess,
};

const connector = connect(mapStateProps, mapLocationProps);

export default connector(Profile);

//// import { Link, Outlet } from "react-router-dom";

// function Profile() {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to={"/profile/details"}>Profile Details</Link>
//         </li>
//       </ul>
//       <ul>
//         <li>
//           <Link to={"/profile/settings"}>Profile settings</Link>
//         </li>
//       </ul>
//       <Outlet />
//     </div>
//   );
// }

// export default Profile;
