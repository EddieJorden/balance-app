"use strict";
// import { ChangeEvent } from 'react';
// import PropTypes from 'prop-types';
// interface Props {
//   setter: Function;
//   getter: string;
// }
// const InputField: React.FC<Props> = function ({ setter, getter }) {
//   const setValue = setter();
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };
//   return (
//     <div>
//       <input type="text" placeholder={getter} onChange={handleChange} />
//     </div>
//   );
// };
// InputField.defaultProps = {
//   setter: () => {
//     console.log('clicked');
//     return 'default value'
//   },
//   getter: 'data to get'
// };
// InputField.propTypes = {
//   setter: PropTypes.func.isRequired,
//   getter: PropTypes.string.isRequired
// };
// export default InputField;
