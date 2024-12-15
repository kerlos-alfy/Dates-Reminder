/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";

function DataCount({ person }) {
	return (
		<Row className="justify-content-center my-3">
			<Col sm="8" className="">
				لديك {person.length} مواعيد
			</Col>
		</Row>
	);
}

export default DataCount;
