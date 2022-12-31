import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/Contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { signInWithGoogle, createUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleSignUpForm = (data) => {
    console.log(data);
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveToDataBase(data);
      })
      .catch((err) => {
        console.log(err);
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

  const saveToDataBase = (data) => {
    const { fName, lName, email, gender, birthDate } = data;
    const user = {
      username: null,
      name: fName + lName,
      userCreated: new Date(),
      email,
      gender,
      birth_date: birthDate,
      address: null,
      phone: null,
      website: null,
      company: null,
    };
    console.log(user);

    fetch(`http://localhost:5000/users`, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
                {...register(`fName`, {
                  required: `your first name is required!`,
                })}
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
              />
              {errors?.fName && (
                <p className="text-red-400">{errors?.fName?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Last Name</span>
              </label>
              <input
                {...register(`lName`, {
                  required: `your last name is required!`,
                })}
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
              />
              {errors?.lName && (
                <p className="text-red-400">{errors?.lName?.message}</p>
              )}
            </div>
          </div>
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
            {errors?.password && (
              <p className="text-red-400">{errors?.password?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Your Birth Day</span>
            </label>
            <input
              {...register(`birthDate`, {
                required: `your birth day is required.`,
              })}
              type="date"
              className="input input-bordered w-full"
            />
            {errors?.birthDate && (
              <p className="text-red-400">{errors?.birthDate?.message}</p>
            )}
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
          <input
            className="input input-bordered w-full mt-4"
            type="submit"
            value="Sign Up"
          />
        </form>
        <h2 className="mb-4">
          already have an account?{" "}
          <Link className="text-sky-500" to={`/signin`}>
            Sign In
          </Link>
        </h2>
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
