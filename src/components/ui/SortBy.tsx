import { useRouter } from 'next/router';
import Select from './Select';

interface SortByProps {
  options: { label: string; value: string }[];
  name: string;
  classes: string;
  label?: string;
}

const SortBy: React.FC<SortByProps> = ({ options, name, classes, label = '' }) => {
  const router = useRouter();
  const query = router.query;
  const sortBy = router.query[name] || '';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push({
      query: { ...query, [name]: e.target.value },
    });
  };

  return (
    <div className='relative'>
      <Select
        classes={classes}
        label={label}
        options={options}
        type='white'
        value={sortBy}
        onChange={handleChange}
      />
      <p className='absolute bg-white px-1 -top-2 left-2 text-xs text-[#4F5259]'>
        {label}
      </p>
    </div>
  );
};

export default SortBy;
