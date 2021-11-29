import { useEffect, useState } from 'react';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes } from './state/action-creators';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	const state = useSelector((state) => state.notes);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchNotes());
	}, []);

	const [ token, setToken ] = useState();

	if (!token) {
		return <Login setToken={setToken} />;
	}

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/dashboard" element={<Dashboard state={state} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
