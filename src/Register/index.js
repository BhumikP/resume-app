import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAuth } from '../hooks/useAuth';
import { setItemToLocalStorage } from '../utils/helper';
import { signUpUser } from '../utils/services/apis';

const schema = yup.object({
  first_name: yup
    .string()
    .min(3, 'First name must be atleast 3 characters long')
    .required('First name is required'),
  last_name: yup
    .string()
    .min(3, 'Last name must be atleast 3 characters long')
    .required('Last name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: yup.string().max(30).required('Password is required'),
  password_confirmation: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Confirm Passwords must match with Password',
    ),
});

function Register() {
  const navigate = useNavigate();
  const auth = useAuth();

  const { mutate, isLoading } = useMutation((data) => signUpUser(data), {
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
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (user) => {
    const info = { user };
    mutate(info);
    console.log(info);
  };
  console.log(errors);

  return (
    <div className="bg-primary-700 h-screen">
      <div className="mx-auto py-20 w-full max-w-md ">
        <form
          className="bg-primary-500 shadow-xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-bold text-center text-purple uppercase mb-4">
            Register yourself
          </h1>
          <div className="mb-4">
            <label className=" block text-white text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-400 focus:shadow-outline"
              {...register('first_name')}
              placeholder="First name"
              type="text"
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs italic">
                {errors?.first_name?.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-400 focus:shadow-outline"
              {...register('last_name')}
              placeholder="Last name"
              type="text"
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs italic">
                {errors?.last_name?.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
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
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
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
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-primary-400 focus:shadow-outline"
              id="password_confirmation"
              type="password"
              placeholder="ex:Test@123"
              {...register('password_confirmation')}
            />
            {errors.password_confirmation && (
              <p className="text-red-500 text-xs italic">
                {errors?.password_confirmation?.message}
              </p>
            )}
          </div>
          <button
            className="bg-secondary-600 flex mx-auto  hover:opacity-75 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          {isLoading && <h1>Loading....</h1>}
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <a
              className="underline text-secondary-700 hover:opacity-75"
              onClick={() => navigate('/')}
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
