import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Components/Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { handleSubmit, register } = useForm();
  const { signInWithGoogle, createUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleSignUpForm = (data) => {
    const { email, password } = data;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const googleSignUp = () => {
    signInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-96 min-w-min mx-4 md:mx-0 mt-6">
        <h2 className="text-3xl font-bold text-center">Sign Up</h2>
        <form
          onSubmit={handleSubmit(handleSignUpForm)}
          className="flex gap-y-1 flex-col"
        >
          <div className="flex flex-col md:flex-row gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your First Name</span>
              </label>
              <input
                {...register(`fName`)}
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Last Name</span>
              </label>
              <input
                {...register(`lName`)}
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              {...register(`email`)}
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              {...register(`password`)}
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Birth Day</span>
            </label>
            <input
              {...register(`birthDate`)}
              type="date"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <div className="flex items-center justify-between">
              <div className="gap-2 flex">
                <input
                  {...register(`gender`)}
                  type="radio"
                  name="select_gender"
                  value="Male"
                />
                <label htmlFor="Male">Male</label>
              </div>
              <div className="gap-2 flex">
                <input
                  {...register(`gender`)}
                  type="radio"
                  name="select_gender"
                  value="Female"
                />
                <label htmlFor="Female">Female</label>
              </div>
              <div className="gap-2 flex">
                <input
                  {...register(`gender`)}
                  type="radio"
                  name="select_gender"
                  value="Custom"
                />
                <label htmlFor="Custom">Custom</label>
              </div>
            </div>
          </div>
          <div className="form-control w-full">
            <div className="flex gap-3 items-center justify-left">
              <input
                {...register(`terms`)}
                type="checkbox"
                name="terms&condition"
                value="terms"
              />
              <label htmlFor="terms&condition">
                i agree with nodify terms and conditions.
              </label>
            </div>
          </div>
          <input className="input input-bordered w-full my-4" type="submit" value="Sign Up" />
        </form>
        <div className="divider">OR</div>
        <div className="justify-center flex">
          <button
            onClick={googleSignUp}
            className="btn btn-outline w-full btn-wide"
          >
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
