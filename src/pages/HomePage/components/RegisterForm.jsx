import React, { useState } from 'react';
import { LucideEye, LucideEyeOff } from 'lucide-react';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';

const RegisterForm = () => {

  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match. Please try again.',
      });
      return;
    }

    try {
      setLoading(true)
      const formData = new FormData(event.target);
      const firstname = formData.get("firstname");
      const lastname = formData.get("lastname");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmpassword = formData.get("confirmpassword");

      const payload = { firstname: firstname, lastname: lastname, email: email, password: password }
      const response = await apiSignup(payload);
      console.log(response.data);

      // Show a success notification
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered!',
      });

      navigate("/login")

    } catch (error) {
      console.log(error);

      // Show an error notification
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'There was an error during registration. Please try again.',
      });

    } finally {
      setLoading(false)
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('./src/assets/images/frame2.jpg')",
        }}> */}

      {/* Form container */}
      <div className="relative z-10 flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-inherit bg-opacity-90 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
          {/* Form fields */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="firstname">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Enter first name. eg: John"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Enter last name. eg: Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email. eg: Johnjohndoe@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password. eg: Johnj***@d**"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {showPassword ? (
                  <LucideEyeOff
                    size={20}
                    className="text-gray-400 hover:text-gray-600"
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <LucideEye
                    size={20}
                    className="text-gray-400 hover:text-gray-600"
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmpassword"
                name="confirmpassword"
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {showPassword ? (
                  <LucideEyeOff
                    size={20}
                    className="text-gray-400 hover:text-gray-600"
                    onClick={handleTogglePassword}
                  />
                ) : (
                  <LucideEye
                    size={20}
                    className="text-gray-400 hover:text-gray-600"
                    onClick={handleTogglePassword}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default RegisterForm;