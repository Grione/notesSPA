const NoteEdit = ({ id, title, text, tags }) => {
	return (
		<div className="box">
			<form>
				<div className="content">
					<div className="columns">
						<div className="column">
							<input type="text" className="input" value={title} />
						</div>
					</div>
					<textarea className="textarea" value={text} />
					<input type="text" className="input" value={tags.join(' ')} />
				</div>
			</form>
		</div>
	);
};

export default NoteEdit;
