import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { FAKE_STORE_API_URL } from '~/services/api-client';

const useProduct = (id: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  });

  return { product: data, isLoading };
};

export default useProduct;

const getProduct = async (id: number) => {
  try {
    const { data } = await axios.get(`${FAKE_STORE_API_URL}/products/${id}`);
    return data || [];
  } catch (error) {
    console.log(error);
  }
};
