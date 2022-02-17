import React, { useState } from "react";

const Form = () => {
	let [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		category: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		let formvlaue = "";

		for (let iterator in formData) {
			formvlaue = `${formvlaue}  ${iterator} : ${formData[iterator]} \n`;
		}
		formvlaue = formvlaue + "your details are being submitted";

		alert(formvlaue);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor='name'>name</label>
					<input
						type='text'
						id='name'
						value={formData.name}
						placeholder='name'
						onChange={(e) => {
							setFormData({
								...formData,
								name: e.target.value,
							});
						}}
					/>
				</div>
				<div>
					<label htmlFor='email'>email</label>
					<input
						type='email'
						id='email'
						value={formData.email}
						placeholder='email'
						onChange={(e) => {
							setFormData({
								...formData,
								email: e.target.value,
							});
						}}
					/>
				</div>
				<div>
					<label htmlFor='password'>password</label>
					<input
						type='text'
						id='password'
						value={formData.password}
						placeholder='password'
						onChange={(e) => {
							setFormData({
								...formData,
								password: e.target.value,
							});
						}}
					/>
				</div>
				<div>
					<label htmlFor='category'>category</label>
					<select
						id='category'
						value={formData.category}
						onChange={(e) => {
							setFormData({
								...formData,
								category: e.target.value,
							});
						}}>
						<option value='' disabled selected>
							Select your option
						</option>
						<option value='male'>male</option>
						<option value='female'>female</option>
						<option value='others'>others</option>
					</select>
				</div>

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Form;
