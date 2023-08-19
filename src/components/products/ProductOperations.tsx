import React from 'react';
import SortBy from '../ui/SortBy';
import useCategories from '~/hooks/useCategories';

const ProductOperations = () => {
  const { categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <div className='animate-pulse h-14 my-6 bg-grey-200  dark:bg-grey-700 w-full'></div>
    );
  }

  const categoryOptions = categories?.map((category: string[]) => ({
    label: category,
    value: category,
  }));

  return (
    <div className='bg-white rounded-md flex items-center gap-5 py-6 flex-wrap'>
      <SortBy
        name='category'
        label='Categories'
        classes='rounded-md md:w-[200px]'
        options={[{ value: 'all', label: 'All' }, ...categoryOptions]}
      />

      <SortBy
        name='sort'
        label='Sort'
        classes='rounded-md md:w-[200px]'
        options={[{ label: 'Ascending', value: 'asc' }, {label: 'Descending', value: 'desc'}]}
      />
    </div>
  );
};

export default ProductOperations;
