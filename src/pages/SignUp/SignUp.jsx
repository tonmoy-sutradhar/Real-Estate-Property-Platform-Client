import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { imageUpload, saveUser } from "../../API/Utils";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import img from "../../assets/images/signup-img.jpg";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();

  // -------------------------------Sign Up------------------------ -----------------
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const terms = form.elements.terms.checked;
    console.table({ name, email, password, image, terms });

    setErr("");
    setSuccess(false);

    // Logic for password---------------------->>
    if (password.length <= 6) {
      setErr("Password must be more than 6 characters.");
      toast.error("Password must be more than 6 characters.");
      return;
    }

    if (!terms) {
      setErr("Please Accept Terms & Condition");
      toast.error("Please Accept Terms & Condition");
      return;
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!regex.test(password)) {
      setErr(
        "Password must contain more than six characters, one number, one uppercase letter, and one special character."
      );
      toast.error(
        "Password must contain more than six characters, one number, one uppercase letter, and one special character."
      );
      return;
    }

    // Image upload-------------->>
    const photoURL = await imageUpload(image);

    try {
      const result = await createUser(email, password);

      await updateUserProfile(name, photoURL);

      //--------------------------------- Save user in the database--------------------------
      await saveUser({
        email: result?.user?.email,
        displayName: name,
        photoURL,
      });

      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Signup failed. Please try again.");
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

      //--------------------------------- Save user in the database--------------------------
      await saveUser({
        email: result?.user?.email,
        displayName: result?.user?.displayName,
        photoURL: result?.user?.photoURL,
      });

      navigate("/");
      toast.success("Google Signup Successful");
    } catch (err) {
      console.error(err);
      toast.error(err?.message || "Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="px-4 pt-9">
      <div className="flex h-full items-center justify-center md:p-0">
        <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md">
          <div className="relative hidden items-center justify-center bg-blue-300 md:flex md:w-[50%]">
            <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
            <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
            <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400 transition-all"></div>
            <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-blue-300 to-blue-400"></div>
            <div className="z-10 space-y-2 text-center">
              <h2 className="text-5xl font-medium text-black">Welcome</h2>
              <h1 className="text-gray-600">Real State Property Platform</h1>

              <img className="w-40 h-40 rounded-full" src={img} alt="Image" />
            </div>
          </div>

          <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
            <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight text-blue-400">
              Sign Up
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-center justify-center gap-4"
            >
              <input
                className="w-[80%] rounded-lg border border-blue-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                type="name"
                placeholder="Name"
                name="name"
              />
              <input
                className="w-[80%] rounded-lg border border-blue-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                type="email"
                placeholder="Email"
                name="email"
              />

              {/* Image------------ */}

              <input
                className="w-[80%] rounded-lg border border-blue-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />

              <div className="w-[100%] relative flex justify-center items-center">
                <input
                  className="w-[80%] rounded-lg border border-blue-400 bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-300/50 md:w-[60%] dark:text-zinc-400"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-2xl text-white absolute right-14 top-2 lg:right-44 lg:top-30"
                >
                  {showPassword ? <IoMdEyeOff /> : <IoEyeSharp />}
                </button>
              </div>

              <div className="w-[100%] ">
                <label className="cursor-pointer label justify-start">
                  <input
                    type="checkbox"
                    name="terms"
                    className="ml-[44px] lg:ml-[160px] checkbox checkbox-success bg-gray-300 border-2 border-green-500"
                  />
                  <span className="label-text ml-2  text-white">
                    Accept Terms & Conditions
                  </span>
                </label>
              </div>
              <p className="text-[14px] text-gray-400">
                Already have an account ?{" "}
                <Link to="/login" href="#" className="text-blue-400">
                  Login In
                </Link>
              </p>
              <button
                className="uppercase w-[80%] rounded-lg bg-blue-400 px-6 py-2 font-medium text-white outline-none hover:bg-blue-500 md:w-[60%]"
                type="submit"
              >
                Sign Up
              </button>
            </form>

            <div className="my-8 flex items-center px-8">
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
                    navigate("/");
                  })
                  .catch((error) => {
                    toast.warning(error.message);
                  });
              }}
              className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-blue-400"
            >
              <div className="relative z-20 flex h-full items-center bg-blue-400 px-4 text-lg text-white duration-300 group-hover:bg-transparent group-hover:text-blue-400">
                Signin with
              </div>
              <span className="flex h-full items-center px-4 text-xl font-bold bg-white text-red-400 duration-300 group-hover:bg-blue-400 group-hover:text-white">
                <img
                  className="w-8 h-8"
                  src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                  alt=""
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
