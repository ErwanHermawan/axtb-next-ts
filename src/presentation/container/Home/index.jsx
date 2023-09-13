"use client";

// --- core
import { useState } from "react";

// --- components
import Default from "@template/Default";
import SectionCarousel from "@organism/SectionCarousel";
import SectionCart from "@organism/SectionCart";

// --- widgets
import WidgetPersonalInformation from "infrastucture/widget/WidgetPersonalInformation";
import WidgetPosts from "infrastucture/widget/WidgetPosts";

// --- vendors
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const Home = (props) => {
	const [startDate, setStartDate] = useState(new Date());

	const { dataUser } = props;

	return (
		<>
			<Default>
				<div className="container">
					<SectionCarousel />
					{/* <ul>
						{dataUser.users.map((val, idx) => (
							<li key={`usr${idx}`}> {`${val.firstName} ${val.lastName}`} </li>
						))}
					</ul> */}
					<div>
						<h2>Datepicker</h2>
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
						/>
						<p>{moment(startDate).format("MMM Do YY")}</p>
					</div>
					<WidgetPersonalInformation />
					<SectionCart />
					<WidgetPosts />
				</div>
			</Default>
		</>
	);
};

export default Home;
