import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import"./Login.css"

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { AuthContext } from '../../Providers/AuthProvider';

const LogIn = () => {
	const { signIn, googleSignIn, forgotPassword, setLoading } =
		useContext(AuthContext);

	const [errors, setError] = useState('');

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [showPass, setShowPass] = useState(false);
	const [userEmail, setUserEmail] = useState('');

	// users can login if they have already created an account

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		let form = e.target;
		let email = form.email.value;
		let password = form.password.value;

		signIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				navigate(from, { replace: true });
				toast.success('Success');
			})
			.catch((e) => {
				toast.error(e.message);
				setError(e.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	

	// Google signIn Authentication

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				console.log(result.user);
				toast.success('success');

				navigate(from, { replace: true });
			})

			.catch((e) => {
				toast.error(e.message);
			});
	};

	// handle email

	const handleEmailOnBlur = (e) => {
		let email = e.target.value;
		setUserEmail(email);
	};

	// handle reset password

	const handleForgotPassword = (e) => {
		e.preventDefault();
		forgotPassword(userEmail)
			.then(() => {
				toast.success('Password reset email sent!');
			})
			.catch((e) => {
				toast.error(e.message);
			});
	};

	// toggleShowPassword

	const togglePassword = (e) => {
		e.preventDefault();
		setShowPass(!showPass);
	};

	return (
		<div className="mb-5 login-comp p-10 md:p-20 ">
			
			<div className="w-full max-w-md p-6 m-auto mx-auto   rounded-md text-yellow-100 shadow-md bg-gradient-to-tr from-slate-900 via-rose-900 to-slate-900">

				{errors && <p className="text-center text-xl my-3 text-red-600">{errors}</p>}
				<h2 className="mb-3 text-3xl font-semibold text-center text-white">Login to your account</h2>
				<p className="text-sm text-center dark:text-gray-400 mb-5 text-white ">
					Don't have account?
					<Link to={'/register'} className="focus:underline hover:underline ml-2 text-white">
						Sign up here
					</Link>
				</p>

				<form onSubmit={handleSubmit} className="space-y-8 ">
					<div className="space-y-4">
						<div className="space-y-2">
							<label htmlFor="email" className="block text-sm text-left">
								Email address
							</label>
							<input
								type="email"
								name="email"
								onBlur={handleEmailOnBlur}
								placeholder="Email"
								required
								className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
						</div>
						<div className="space-y-2 relative">
							<div className="flex justify-between">
								<label htmlFor="password" className="text-sm">
									Password
								</label>
								
							</div>
							<input
								type={showPass ? 'text' : 'password'}
								name="password"
								placeholder="Password"
								className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
							/>
							<span
								className="absolute right-5 cursor-pointer top-8 text-xl text-white"
								onClick={togglePassword}>
								{showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
							</span>
							<span
									onClick={handleForgotPassword}
									className="text-xs hover:underline cursor-pointer dark:text-red-600">
									Forgot password?
								</span>
						</div>
					</div>
					<button
						type="submit"
						className="flex mt-10 items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-700 duration-500">
						Login
					</button>
					<div className="flex items-center w-full my-4">
						<hr className="w-full dark:text-gray-400" />
						<p className="px-3 dark:text-gray-400">OR</p>
						<hr className="w-full dark:text-gray-400" />
					</div>
				</form>
				<div className="my-6 space-y-4 ">
					<button
						onClick={handleGoogleSignIn}
						className="flex mt-10 items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-700 duration-500">
						<FaGoogle className="w-5 h-5 " />
						<p>SignIn with Google</p>
					</button>
					
				</div>
			</div>
		</div>
	);
};

export default LogIn;