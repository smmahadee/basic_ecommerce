function ProductSkeleton() {
  return (
    <div role='status' className='space-y-2.5 p-20 animate-pulse'>
      <div className='grid grid-cols-2 gap-[30px] w-full '>
        <div className='h-[690px] bg-grey-200  dark:bg-grey-700 w-full'></div>

        <div className=''>
          <div className='h-16 bg-grey-300 mb-5  dark:bg-grey-600 w-full'></div>
          <div className='h-5 bg-grey-300 mb-5 dark:bg-grey-600 w-24'></div>
          <div className='h-5 bg-grey-300 mb-5 dark:bg-grey-600 w-24'></div>
          <div className='h-20 bg-grey-300 mb-5 dark:bg-grey-600 w-full'></div>
        </div>
      </div>

      <span className='sr-only'>Loading...</span>
    </div>
  );
}

export default ProductSkeleton;
