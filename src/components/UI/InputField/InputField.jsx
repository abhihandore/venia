import React from "react";
import "./InputField.scss";

const InputField = ({ required, label, id, name, type, inputClass }) => {
	const req = required ? "required" : "";

	return (
		<div className={`field ${req}`}>
			<label htmlFor={id} className="label">
				{label}
			</label>
			<div className="control">
				<input
					className={`input-field ${inputClass}`}
					type={type}
					name={name}
					id={id}
				/>
			</div>
		</div>
	);
};

export default InputField;
