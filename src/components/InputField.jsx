import { debounce } from "lodash";

const InputField = (setter, getter) => {
  const setValue = setter();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={getter}
        onChange={debounce((e) => {
          handleChange(e);
        }, 1000)}
      />
    </div>
  );
};

export default InputField;
