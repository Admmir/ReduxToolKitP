import classes from "./Auth.module.css";
import { authActions } from "./store/index";
import { useSelector, useDispatch } from "react-redux";
import UserProfile from "./UserProfile";

const Auth = () => {
  const dispatch = useDispatch();
  const Auths = useSelector((state) => state.authentification.isLoged);
  const onLoginHandler = (event) => {
    dispatch(authActions.login());
    event.preventDefault();
  };
  if (!Auths) {
    return (
      <div>
        <main className={classes.auth}>
          <section>
            <form>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button onClick={onLoginHandler}>Login</button>
            </form>
          </section>
        </main>
      </div>
    );
  } else {
    return <UserProfile />;
  }
  // I should have conditional rendering done in higher component
  // but I am kind of lazy to import everything again
};

export default Auth;
