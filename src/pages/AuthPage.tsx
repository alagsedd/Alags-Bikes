import { useForm } from "react-hook-form";
import styles from "../styles/AuthPage.module.css";
import { useContext, useState } from "react";
import { SiGmail } from "react-icons/si";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../components/FirebaseConfig";
import { Button } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import SignInSuccessCard from "../components/SignInSuccessCard";
import FormDetailsContext from "../contexts/FormDetailsContexts";

interface FormData {
  email: string;
  username: string;
  password: string;
}
const AuthPage = () => {
  const [user] = useAuthState(auth);
  const [loginError, setLoginError] = useState();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const { dispatch } = useContext(FormDetailsContext);

  const usernameRef = getValues("username");
  const createNewAccount = () => {
    createUserWithEmailAndPassword(
      auth,
      getValues("email"),
      getValues("password")
    )
      .then((res) => {
        console.log(res, "success", getValues("username"));
        dispatch({ type: "handleUsername", username: usernameRef });
      })
      .catch((err) => {
        setLoginError(err.message);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };
  return (
    <>
      {user && <SignInSuccessCard />}

      {!user && (
        <div className={styles.main}>
          {" "}
          <div className={styles.parent}>
            <h1 className={styles.siteName}>
              <span>Alags Bikes</span>
            </h1>
            <p className={styles.lure}>Ride in flame.</p>

            <form
              className={styles.form}
              onSubmit={handleSubmit(createNewAccount)}
            >
              <input
                {...register("email", { required: true })}
                className={styles.input}
                type="text"
                placeholder="Email"
              />
              {loginError === "auth/email-already-in-use" && (
                <p className="text-danger">Account already in use</p>
              )}
              {loginError === "auth/invalid-email" && (
                <p className="text-danger">Invalid Email</p>
              )}
              {loginError === "auth/invalid-password" && (
                <p className="text-danger">Incorrect password</p>
              )}
              {errors.email?.type === "required" && (
                <p className="text-danger">This field is required</p>
              )}

              <input
                {...register("username", { required: true, maxLength: 6 })}
                className={styles.input}
                type="text"
                placeholder="Username"
              />
              {errors.username?.type === "required" && (
                <p className="text-danger">This field is required</p>
              )}
              {errors.username?.type === "maxLength" && (
                <p className="text-danger">
                  The username cannot be more than 6 characters
                </p>
              )}

              <input
                {...register("password", { required: true, minLength: 7 })}
                className={styles.input}
                type="text"
                placeholder="Password"
              />
              {errors.password?.type === "minLength" && (
                <p className="text-danger">
                  The username cannot be less than 5 characters
                </p>
              )}
              {errors.password?.type === "required" && (
                <p className="text-danger">This field is required</p>
              )}

              <Button type="submit" variant="contained">
                {" "}
                Sign up
              </Button>
            </form>

            <span className={styles.or}>OR</span>

            <div className={styles.alt}>
              {/* <p> Don't have an account? </p> */}

              <Button
                startIcon={<SiGmail />}
                onClick={signInWithGoogle}
                variant="outlined"
              >
                Sign in With Google
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
