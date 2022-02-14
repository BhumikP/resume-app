/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { setItemToLocalStorage } from '../utils/helper';
import { loginUser } from '../utils/services/login';

function Login() {
  const user = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await loginUser(data);

    if (res.data) {
      setItemToLocalStorage('token', res.data.authentication);
      user.login();
      toast.success('You have successfully logged in');
      navigate('/user');
    }
    if (res.error) {
      console.log('here');
      toast.error(res.error);
      return;
    }
  };

  return (
    <div className="mx-auto mt-48 w-full max-w-xs">
      <form
        className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
            {...register('email', { required: true })}
            placeholder="ex:sample@gmail.com"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              Please choose a email.
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border   rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-500 focus:shadow-outline"
            id="password"
            type="password"
            placeholder="ex:Test@123"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          )}
        </div>
        <button
          className="flex mx-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
