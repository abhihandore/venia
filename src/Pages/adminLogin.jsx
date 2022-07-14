import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/UI/InputField/InputField";

const AdminLogin = () => {
	const form = useReducer();
	const onAdminLoginFormSubmit = (e) => {
		e.preventDefault();
	};

	const inputChangeHandler = (e) => {};
	return (
		<div className="login-page admin-login ">
			<div className="container">
				<form onSubmit={onAdminLoginFormSubmit}>
					<fieldset className="fieldset">
						<InputField
							required={true}
							label="Email or Phone Number"
							id="username"
							name="username"
							type="text"
							inputClass="username-input"
							onChange={inputChangeHandler}
						/>
						<InputField
							required={true}
							label="Password"
							id="password"
							name="password"
							type="password"
							inputClass="password-input"
							onChange={inputChangeHandler}
						/>
						{/* <div className="field required">
							<label className="label" htmlFor="username">
								email or phone number
							</label>
							<div className="control">
								<input
									className="input-field"
									name="username"
									id="username"
									type="text"
								/>
							</div>
						</div>
						<div className="field required">
							<label className="label" htmlFor="password">
								Password
							</label>
							<div className="control">
								<input
									className="input-field"
									name="password"
									id="password"
									type="password"
								/>
							</div>
						</div> */}
						<div className="field-controls">
							<button
								type="submit"
								name="submit"
								className="submit-btn primary-btn"
							>
								Submit
							</button>
							<button name="forget password" className="link forgot-pass-link">
								Forgot Password
							</button>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default AdminLogin;
