import { useState } from "react";
import { debounce } from "lodash"

const UserInput = () => {
const [name, setName] = useState('user name');

const handleChange = (e) => {
	setName(e.target.value)
}

	return (
		<div>
			<input type="text"  placeholder={name} onChange={debounce((e) => {handleChange(e)}, 1000)}/>
		</div>
	)
}

export default UserInput;
