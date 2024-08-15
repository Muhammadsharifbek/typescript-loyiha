// import { connect } from "react-redux";
// import { userRequest } from "../redux/action";
// import { RootState } from "../redux/store";
// import { userSuccess } from "./Profile";
// import { ConnectProps } from "react-redux";

// const Login = ({
//   userSuccess,
//   userRequest,
// }: ConnectedProps: any <typeof connector/>) => {
//   return <div>Login Page</div>;
// }
// const mapStateProps = (state: RootState) => ({
//   isLoading: state.isLoading,
// });

// const mapStateToProps = {
//   userSuccess,
//   userRequest,
// };

// const connector = connect(mapStateProps, mapStateToProps);

// export default Login;

import { connect, ConnectedProps } from "react-redux";
import { userRequest } from "../redux/action";
import { RootState } from "../redux/store";
import { userSuccess } from "./Profile";

type PropsFromRedux = ConnectedProps<typeof connector>;

const Login: React.FC<PropsFromRedux> = ({ isLoading, userSuccess, userRequest }) => {
  console.log(isLoading);

  const handeLogin = () => {
    userRequest;
    setTimeout(() => {
      userSuccess({ name: "Muhammadsharif", id: "333", roles: "admin" });
    }, 3000);
  };

  return isLoading ? (
    <h3>isLoading...</h3>
  ) : (
    <form>
      <input type="text" />
      <input type="password" />
      <button type="button" onClick={handeLogin}>
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  userSuccess,
  userRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Login);
