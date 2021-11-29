const Login = () => {
	return (
		<div className="modal is-active">
			<div className="modal-background" />
			<div className="modal-content">
				<div className="box">
					<div className="field">
						<label className="label">Login</label>
						<div className="control">
							<input className="input" type="text" placeholder="Text input" />
						</div>
					</div>
					<div className="field">
						<p className="control has-icons-left">
							<input className="input" type="password" placeholder="Password" />
							<span className="icon is-small is-left">
								<i className="fas fa-lock" />
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
