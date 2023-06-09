import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {  FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './register.css';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
 

const Register = () => {
	const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
	const [showPass, setShowPass] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [errors, setErrors] = useState({
		password: '',
		general: '',
	});

	// password validation
	const handlePasswordChange = (e) => {
		const password = e.target.value;
		const noSymbol = !/[\!\@\#\$\%\^\&\*]{1,}/.test(password);
		if (password.length < 6) {
			setErrors({ ...errors, password: 'Must be at least 6 characters' });
		} else {
			setErrors({ ...errors, password: '' });
		}
	};

	// onsubmit, user will create account
	const handleSubmit = (e) => {
		e.preventDefault();
		let form = e.target;
		let name = form.name.value;
		let photoURL = form.photoURL.value;
		let email = form.email.value;
		let password = form.password.value;
		console.log(name, photoURL, email, password);

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				toast.success('Registered Successfully');
				form.reset();
				handleUpdateUserProfile(name, photoURL);
				// navigate(from, { replace: true });
				navigate('/')
			})
			.catch((err) => {
				console.log(err);
				toast.error(err.message);
				setErrors({ ...errors, general: err.message });
			});
	};

	

	// Google signIn Authentication

	const handleGoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				console.log(result.user);
				toast.success('success');

				navigate('/')
			})

			.catch((e) => {
				setErrors({ ...errors, general: e.message });
				toast.error(e.message);
			});
	};

	// function to update user name and profile picture

	const handleUpdateUserProfile = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};

		updateUserProfile(profile)
			.then(() => {})
			.catch((err) => {
				setErrors({ ...errors, general: err.message });
				toast.error(err.message);
			});
	};

	// toggleShowPassword

	const togglePassword = (e) => {
		e.preventDefault();
		setShowPass(!showPass);
	};

	return (
		<div className="register-comp p-10 md:p-20 ">
			<Helmet>
			<title> Toy Paragon | Register </title>
			</Helmet>
			<div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-[#8D71E8] text-black ">
				<h1 className="text-2xl font-bold text-center">Register !!!</h1>
				<form onSubmit={handleSubmit} className="space-y-6 ng- ">
					<div className="space-y-1 text-sm">
						<label htmlFor="name" className="block dark:text-black text-left mb-1">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="photoURL" className="block dark:text-black text-left mb-1">
							PhotoURL
						</label>
						<input
							type="text"
							name="photoURL"
							placeholder="PhotoURL"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-black focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="email" className="block dark:text-black text-left mb-1">
							Email
						</label>
						<input
							type="email"
							name="email"
							required
							placeholder="Email"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
					</div>
					<div className="space-y-1 text-sm relative">
						<label htmlFor="password" className="block dark:text-gray-400 text-left mb-1">
							Password
						</label>
						<input
							type={showPass ? 'text' : 'password'}
							name="password"
							onChange={handlePasswordChange}
							required
							placeholder="Password"
							className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
						/>
						<span
							className="absolute right-5 cursor-pointer top-10 text-xl text-white"
							onClick={togglePassword}>
							{showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
						</span>
					</div>
					{errors.password && <p className="text-red-600">{errors.password}</p>}
					<button className="block w-full p-3 text-center rounded-sm flex mt-10 items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-700 duration-500duration-500 hover:text-white">
						Register
					</button>
					{errors.general && <p className="text-center text-red-600">{errors.general}</p>}
				</form>
				<hr className="border-2"></hr>
				<div className="my-6 space-y-4 ">
					<button
						onClick={handleGoogleSignIn}
						className="flex mt-10 items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 hover:bg-purple-700 duration-500">
						<FaGoogle className="w-5 h-5 " />
						<p>SignUP with Google</p>
					</button>
					
				</div>

				<p className="text-xs text-center sm:px-6 dark:text-gray-400">
					Already have an account?
					<Link to="/login" className="underline dark:text-gray-100">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;