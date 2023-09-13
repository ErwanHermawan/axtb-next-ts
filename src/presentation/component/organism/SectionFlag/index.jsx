"use client";
// --- core
import { useState, useEffect } from "react";

// --- components
import FlagCard from "@molecule/FlagCard";

// -- models
import { useFlag } from "@model/flags";

// --- style
import style from "./style.module.scss";

const SectionFlag = () => {
	const { data: dataFlag, error: errorFlag } = useFlag();

	console.log(dataFlag);

	return (
		<div className={style.section}>
			<div className="container">
				<div className={style.filter}>
					<div className={style.inputRow}>
						<input
							type="search"
							name="search-form"
							id="search-form"
							className={style.inputSearch}
							placeholder="Search for..."
						/>
					</div>
					<div className={style.inputRow}>
						<select
							className={style.inputSelect}
							aria-label="Filter Countries By Region"
						>
							<option value="">Filter By Region</option>
						</select>
					</div>
				</div>
				<div className={style.list}>
					{/* {dataFlag.map((val, idx) => (
						<div className={style.item} key={`pic${idx}`}>
							<FlagCard name={val.title} email={val.body} />
						</div>
					))} */}
				</div>
			</div>
		</div>
	);
};

export default SectionFlag;
