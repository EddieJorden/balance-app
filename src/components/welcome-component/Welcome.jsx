import UserNameFetch from "./UserNameFetch";
import UserInput from '../welcome-component/UserInput';

const Welcome = () => {

	return (
		<div>
			Welcome
			<div><UserNameFetch /></div>
			<div><UserInput /></div>
		</div>
	)
};

export default Welcome;
