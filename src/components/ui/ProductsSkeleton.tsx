function ProductsSkeleton() {
  return (
    <div role='status' className='space-y-2.5 animate-pulse'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-14 w-full '>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <div className='h-[245px] bg-grey-200  dark:bg-grey-700 w-full'></div>
            <div className='h-4 my-3 bg-grey-200  dark:bg-grey-700 w-full'></div>
            <div className='flex justify-between space-x-3 items-center'>
              <div className='h-5 bg-grey-300  dark:bg-grey-600 w-24'></div>
              <div className='h-5 bg-grey-300  dark:bg-grey-600 w-24'></div>
            </div>
          </div>
        ))}
      </div>

      <span className='sr-only'>Loading...</span>
    </div>
  );
}

export default ProductsSkeleton;
