interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value: string | string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classes: string;
  [key: string]: any;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, classes, ...props }) => {
  return (
    <select
      className={`border border-[#D9D9D9] text-[#4F5259] py-3 px-2 ${classes}`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options?.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
