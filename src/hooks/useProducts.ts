import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FAKE_STORE_API_URL } from '~/services/api-client';
import { useRouter } from 'next/router';

const useProducts = () => {
  const router = useRouter();
  const { category, sort } = router.query;

  const url = `${FAKE_STORE_API_URL}/products${
    category && category !== 'all' ? `/category/${category}` : ''
  }`;

  const params = {
    sort: sort || 'asc',
  };

  const { data, isLoading } = useQuery({
    queryKey: ['products', category, params],
    queryFn: () => getProducts(url, params),
  });

  return { products: data, isLoading };
};

export default useProducts;

const getProducts = async (
  url: string,
  params: { sort: string | string[] }
) => {
  try {
    const { data } = await axios.get(url, {
      params,
    });
    return data || [];
  } catch (error) {
    console.log(error);
  }
};
