import { useState } from "react";

const UserNameFetch = () => {
	const [name] = useState('no name selected');

//fetch user name from user input, if name does not exist add name to server, create new user object
// const userName = fetch('http://0.0.0.0:3000/getUserName', 
// 	{
// 		method: 'GET'
// 	}
// )


	return (
		<div>
			{name}
		</div>
	)
}

export default UserNameFetch;
