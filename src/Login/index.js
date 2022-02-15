/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { setItemToLocalStorage } from '../utils/helper';
import { loginUser } from '../utils/services/apis';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Loader from '../components/Loader';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Must be a valid email')
      .max(255)
      .required('Email is required'),
    password: yup.string().max(30).required('Password is required'),
  })
  .required();

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { mutate, isLoading, error } = useMutation((data) => loginUser(data), {
    onSuccess: (data) => {
      console.log(data);
      setItemToLocalStorage(
        'Authorization',
        data.headers.authorization.substring(
          7,
          data.headers.authorization.length,
        ),
      );
      auth.login();
      toast.success('You have successfully logged in');
      navigate('/user');
    },
    onError: (data) => {
      toast.error(data.message);
      console.log(data);
    },
  });

  const onSubmit = (user) => {
    const info = { user };
    mutate(info);
  };
  console.log(errors);

  return (
    <div className="h-screen bg-primary-700">
      <div className="mx-auto pt-48 w-full max-w-xs ">
        <form
          className="bg-primary-500 shadow-xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-bold text-center text-purple uppercase mb-4">
            Resume App login
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-400 focus:shadow-outline"
              {...register('email')}
              placeholder="ex:sample@gmail.com"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors?.email?.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-primary-400 focus:shadow-outline"
              id="password"
              type="password"
              placeholder="ex:Test@123"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors?.password?.message}
              </p>
            )}
          </div>
          <button
            className="flex mx-auto bg-secondary-600 hover:opacity-75 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          {isLoading && <Loader isLoading={isLoading} />}
          <p className="mt-4 text-center">
            Don&apos;t have an account?{' '}
            <a
              className="underline text-secondary-700  hover:opacity-75"
              onClick={() => navigate('/register')}
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
