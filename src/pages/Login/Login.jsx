import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { saveUser } from "../../API/Utils";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const Login = () => {
  // --------------------------
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);

  // --------------------------
  const { signIn, signInWithGoogle, loading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (user) return <Navigate to={from} replace={true} />;
  // form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccess(false);
    setErr("");

    try {
      //User Login
      await signIn(email, password);

      navigate(from, { replace: true });
      toast.success("Login successful");
      // setUser(user);
      setSuccess(true);
    } catch (err) {
      setSuccess(false);
      // setErr(err.message);
      toast.error(err?.message);
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      const data = await signInWithGoogle();
      await saveUser(data?.user);

      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      // console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    // ------------------
    <div className="px-5 my-5 mt-16 ">
      <div className=" group mx-auto flex w-full max-w-xl border border-blue-400 bg-white text-blue-400 shadow-lg dark:bg-zinc-900">
        <div className="relative hidden min-h-[110%] w-1/3 overflow-hidden bg-blue-400 sm:block">
          <h1 className="mt-28 bottom-3 right-3 text-right text-xl font-semibold text-white">
            Hey! <br /> Welcome to
            <br />
            Real Estate Property Platform
          </h1>
          <span className="absolute -left-8 -top-8 z-20 h-32 w-32 rounded-full bg-blue-800/20 duration-500 group-hover:h-56 group-hover:w-56"></span>
          <span className="absolute -left-5 -top-5 z-10 h-36 w-36 rounded-full bg-blue-800/50"></span>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 p-8 ">
          <h1 className="pb-6 text-3xl font-semibold tracking-tight">
            Sign In
          </h1>
          <div className="space-y-5">
            <div className="relative text-sm">
              <input
                className="peer/email block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                type="email"
                id="navigate_ui_email_33"
                required
                name="email"
                placeholder=""
              />
              <label
                className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/email:top-3 peer-placeholder-shown/email:bg-transparent peer-placeholder-shown/email:text-sm peer-placeholder-shown/email:text-zinc-400 peer-focus/email:-top-2 peer-focus/email:bg-blue-300 peer-focus/email:text-xs peer-focus/email:text-blue-600"
                htmlFor="navigate_ui_email_33"
              >
                Email
              </label>
            </div>
            <div className="relative text-sm">
              <input
                className="peer/pass block w-full rounded-md border border-blue-400 bg-inherit p-2.5 shadow-lg outline-none"
                type="password"
                id="navigate_ui_password_33"
                required
                // type="password"
                name="password"
                placeholder=""
              />
              <label
                className="absolute -top-2 left-2 rounded-md bg-blue-300 px-2 text-xs text-blue-600 duration-300 peer-placeholder-shown/pass:top-3 peer-placeholder-shown/pass:bg-transparent peer-placeholder-shown/pass:text-sm peer-placeholder-shown/pass:text-zinc-400 peer-focus/pass:-top-2 peer-focus/pass:bg-blue-300 peer-focus/pass:text-xs peer-focus/pass:text-blue-600"
                htmlFor="navigate_ui_password_33"
              >
                Password
              </label>
            </div>
          </div>
          {/* button type will be submit for handling form submission*/}
          <div>
            <p></p>
          </div>
          <button
            // type="submit"
            className="relative z-50 mb-4 mt-8 inline-block overflow-hidden rounded-md uppercase border border-blue-400 px-5 py-2 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-full before:rounded-s-full before:bg-blue-400 before:duration-300 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-full after:rounded-e-full after:bg-blue-400 after:duration-300 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
          >
            Log In
          </button>

          <div className="my-2 flex items-center px-8">
            <hr className="flex-1 border-blue-400" />
            <div className="mx-4 text-blue-400">OR</div>
            <hr className="flex-1 border-blue-400" />
          </div>

          <button
            type="button"
            onClick={() => {
              handleGoogleSignIn()
                .then(() => {
                  // toast.success("Google login successful");
                  navigate(location?.state ? location.state : "/");
                })
                .catch((error) => {
                  toast.warning(error.message);
                });
            }}
            className="group mx-auto flex h-[35px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-blue-400"
          >
            <div className="relative z-20 flex h-full items-center bg-blue-400 px-4  text-white duration-300 group-hover:bg-transparent group-hover:text-blue-400">
              Signin with
            </div>
            <span className="flex h-full items-center px-4 text-xl font-bold bg-white text-red-400 duration-300 group-hover:bg-blue-400 group-hover:text-white">
              <img
                className="w-6 h-6"
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                alt=""
              />
            </span>
          </button>
          <p className="text-sm text-center text-gray-600 mt-2 mb-3">
            Don’t Have An Account ?{" "}
            <Link to="/signup" className="text-blue-500 text-xl">
              Registers
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
