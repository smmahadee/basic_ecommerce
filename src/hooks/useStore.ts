import { useSelector } from 'react-redux';
import { RootState } from '~/features/store';

export const useCart = () => useSelector((state: RootState) => state.cart);
