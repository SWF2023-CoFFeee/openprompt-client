import { PRODUCT_LIST_URL, SELL_PRODUCT_URL } from '@/constants/apiUrl';
import apiClient from './apiClient';

export const getProductList = () => {
  return apiClient({
    method: 'get',
    url: PRODUCT_LIST_URL,
    withCredentials: true,
    params: {
      proexportduct_type: 'copyright',
    },
  });
};

interface IGetProductDetailEndPoint {
  productId: string;
}

export const getProductDetail = ({ productId }: IGetProductDetailEndPoint) => {
  return apiClient({
    method: 'get',
    url: `${PRODUCT_LIST_URL}/${productId}`,
  });
};

export const sellProductTicket = () => {
  return apiClient({
    method: 'post',
    url: SELL_PRODUCT_URL,
    withCredentials: true,
    data: {
      product_id: 'dddddd',
    },
  });
};
