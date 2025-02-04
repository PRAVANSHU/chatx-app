import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import { Toaster } from "react-hot-toast"; 

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs((prev) => ({ ...prev, gender }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center md:w-96 w-80 mx-auto">
      <Toaster />
      <div className="w-full p-6 rounded-lg shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-cyan-400">
          SignUp <span className="text-blue-500">ChatX</span>
        </h1>

        <form onSubmit={handleSubmit}>
        {["fullName", "username", "password", "confirmPassword"].map((field) => (
  <div key={field}>
    <label className="label p-2">
      <span className="text-base label-text">
        {field.charAt(0).toUpperCase() + field.slice(1)}
      </span>
    </label>
    <input
      type={field === "password" || field === "confirmPassword" ? "password" : "text"}
      placeholder={`Enter ${field}`}
      className="w-full input input-bordered h-10"
      value={inputs[field]}
      onChange={(e) => setInputs({ ...inputs, [field]: e.target.value })}
    />
  </div>
))}


          <GenderCheckbox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to="/login" className="text-sm hover:underline hover:text-blue-200 mt-2 inline-block">
            Already have an account?
          </Link>

          <div>
            <button type="submit" className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
