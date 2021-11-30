import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
	return fetch('http://localhost:8080/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials)
	}).then((data) => data.json());
}

const Login = ({ setToken }) => {
	const [ username, setUserName ] = useState();
	const [ password, setPassword ] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

	return (
		<div className="modal is-active">
			<div className="modal-background" />
			<div className="modal-content">
				<div className="box">
					<form onSubmit={handleSubmit}>
						<div className="field">
							<label className="label">Login</label>
							<div className="control">
								<input
									className="input"
									type="text"
									placeholder="Text input"
									onChange={(e) => setUserName(e.target.value)}
								/>
							</div>
						</div>
						<div className="field">
							<p className="control has-icons-left">
								<input
									className="input"
									type="password"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-lock" />
								</span>
							</p>
						</div>
						<div className="field">
							<p className="control">
								<button className="button is-success" type="submit">
									Login
								</button>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = {
	setToken: PropTypes.func.isRequired
};

export default Login;
