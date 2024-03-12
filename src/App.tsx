import "./scss/reset.scss";
import "./scss/main.scss";

import {
	Select,
	Option,
	Input,
	Tooltip,
	Button,
} from "@material-tailwind/react";

import data from "../mock.json";
import { useState } from "react";
// import axios from "axios";

function App() {
	const [locationId, setLocationId] = useState<undefined | string>(undefined);
	const [categoryId, setCategoryId] = useState<undefined | string>(undefined);
	const [price, setPrice] = useState<undefined | number>(undefined);
	const [segment, setSegment] = useState<string | undefined>(undefined);

	const handleSubmit = () => {
		if (locationId && categoryId && price) {
			if (!segment) {
				const obj = {
					location_id: +locationId,
					microcategory_id: +categoryId,
					price,
				};
				console.log(JSON.stringify(obj));
			} else {
				const obj = {
					segment: [
						{
							location_id: +locationId,
							microcategory_id: +categoryId,
							price,
						},
					],
				};
				console.log(JSON.stringify(obj));
			}
		} else {
			console.log("Выберете необходимые параметры");
		}
	};
	return (
		<>
			<h2 className="text-3xl font-bold text-center mt-[20px] mb-[50px]">
				Avito Analytic Case
			</h2>
			<div className="flex justify-between gap-[20px] px-[20px] mb-[30px]">
				<Select
					value={locationId + ""}
					onChange={(val) => setLocationId(val)}
					label="Выберете локацию"
					placeholder={undefined}>
					{data.locations.map((item) => {
						return (
							<Option value={item.id} key={item.id}>
								{item.name}
							</Option>
						);
					})}
				</Select>
				<Select
					value={categoryId + ""}
					onChange={(val) => setCategoryId(val)}
					label="Выберете категорию"
					placeholder={undefined}>
					{data.categories.map((item) => {
						return (
							<Option value={item.id} key={item.id}>
								{item.name}
							</Option>
						);
					})}
				</Select>
			</div>
			<div className="flex justify-between gap-[20px] px-[20px] mb-[30px]">
				<Input
					value={price}
					onChange={(e) => setPrice(+e.target.value)}
					label="Введите цену"
					crossOrigin={undefined}
				/>
				<Tooltip
					content="Оставьте пустым для базовой цены"
					placement="bottom">
					<Input
						value={segment}
						onChange={(e) => setSegment(e.target.value)}
						label="Номер сегмента для скидочной цены"
						crossOrigin={undefined}
					/>
				</Tooltip>
			</div>
			<div className="px-[20px]">
				<Tooltip content="Сохранить и отправить" placement="bottom">
					<Button onClick={handleSubmit} placeholder={undefined}>
						Сохранить
					</Button>
				</Tooltip>
			</div>
		</>
	);
}

export default App;
