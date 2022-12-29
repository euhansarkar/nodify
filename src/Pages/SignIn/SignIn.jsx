import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/Contexts/AuthProvider/AuthProvider";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const googleProvider = new GoogleAuthProvider();

  const handleSignInForm = (data) => {
    console.log(data);
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const googleSignIn = () => {
    signInWithGoogle(googleProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-96 min-w-min mx-4 md:mx-0 mt-6">
        <h2 className="text-3xl font-bold text-center">Sign In</h2>
        <form
          onSubmit={handleSubmit(handleSignInForm)}
          className="flex gap-y-1 flex-col"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              {...register(`email`, { required: `your email is required!` })}
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            {errors?.email && (
              <p className="text-red-400">{errors?.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              {...register(`password`, {
                required: `your password is required!`,
              })}
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full"
            />
            {errors?.email && (
              <p className="text-red-400">{errors?.email?.message}</p>
            )}
          </div>
          <input
            className="input input-bordered w-full mt-4"
            type="submit"
            value="Sign Up"
          />
          <h2 className="mb-4">
            new to nodify?{" "}
            <Link className="text-sky-500" to={`/signup`}>
              Sign Up
            </Link>
          </h2>
        </form>
        <div className="divider">OR</div>
        <div className="justify-center flex">
          <button
            onClick={googleSignIn}
            className="btn btn-outline w-full btn-wide"
          >
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
