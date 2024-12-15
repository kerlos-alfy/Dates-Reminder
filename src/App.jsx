import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { person } from "./data";
import DataCount from "./components/DataCount";
import DataList from "./components/DataList";
import DataActions from "./components/DataActions";
import "./App.css";
function App() {
	const [personData, setPersonData] = useState(person);

	const onDelete = () => {
		setPersonData([]);
	};
	const onViewData = () => {
		setPersonData(person);
	};
	useEffect(() => {
		setPersonData([]);
	}, []);
	return (
		<div className="font color-body">
			<Container className="py-5">
				<DataCount person={personData} />
				<DataList person={personData} />
				<DataActions deleteData={onDelete} onViewData={onViewData} />
			</Container>
		</div>
	);
}

export default App;
