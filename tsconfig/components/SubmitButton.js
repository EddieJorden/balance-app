"use strict";
// import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
// import { updateUserName, updateUserEmail } from './userSlice';
// const ClickableButton = styled.div`
//   margin: 15px;
//   border-radius: 15px;
// `;
// const NotClickableButton = styled.div`
//   margin: 15px;
//   border-radius: 15px;
// `;
// interface DataToUpdate {
//   name: string;
//   email: string;
// }
// interface Props {
//   dataToUpdate: DataToUpdate;
//   isDisabled: boolean;
// }
// const SubmitButton: React.FC<Props> = ({ dataToUpdate, isDisabled }) => {
//   const dispatch = useDispatch();
//   // const disabled = isDisabled.isDisabled
//   const handleClick = () => {
//     const nameToSubmit = dataToUpdate.name;
//     const emailToSubmit = dataToUpdate.email;
//     if (nameToSubmit.length > 0 && emailToSubmit.length > 0) {
//       dispatch(updateUserName(nameToSubmit));
//       dispatch(updateUserEmail(emailToSubmit));
//     } else {
//       console.log('ERROR: inavlid name or email entered');
//     }
//   };
//   if (isDisabled) {
//     return (
//       <ClickableButton
//         onClick={handleClick}
//         style={{ color: 'blue', backgroundColor: 'white' }}>
//         Submit
//       </ClickableButton>
//     );
//   }
//   return (
//     <NotClickableButton style={{ color: 'red' }}>Submit</NotClickableButton>
//   );
// };
// export default SubmitButton;
