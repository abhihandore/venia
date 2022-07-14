import React from "react";

const Login = () => {
	return (
		<div className="login-wrapper">
			<fieldset className="fieldset">
				<div className="field">
					<label htmlFor="username" className="label">
						Username
					</label>
					<div className="control">
						<input className="input-field" name="username" id="username" />
					</div>
				</div>
			</fieldset>
		</div>
	);
};

export default Login;
