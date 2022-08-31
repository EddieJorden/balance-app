import { debounce } from 'lodash';
import { ChangeEvent } from 'react';

interface Props {
  setter: Function;
  getter: string;
}

const InputField: React.FC<Props> = ({ setter, getter }) => {
  const setValue = setter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder={getter} />
    </div>
  );
};

export default InputField;
