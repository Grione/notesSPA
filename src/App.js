import { useEffect } from 'react';
import Dashboard from './components/dashboard/dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes } from './state/action-creators';

const App = () => {
	const state = useSelector((state) => state.notes);

  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNotes());
	}, []);

	return (
		<div className="wrapper has-background-dark">
			<div className="container is-fluid">
				<Dashboard state={state} />
			</div>
		</div>
	);
};

export default App;
