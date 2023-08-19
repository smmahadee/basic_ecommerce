import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FAKE_STORE_API_URL } from '~/services/api-client';

const useCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return { categories: data, isLoading };
};

export default useCategories;

const getCategories = async () => {
  try {
    const { data } = await axios.get(
      `${FAKE_STORE_API_URL}/products/categories`
    );
    return data || [];
  } catch (error) {
    console.log(error);
  }
};
