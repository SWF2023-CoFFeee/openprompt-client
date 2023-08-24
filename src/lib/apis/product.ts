import {
  BUY_COPYRIGHT_URL,
  BUY_TICKET_URL,
  PRODUCT_LIST_URL,
  REGISTER_PRODUCT_URL,
} from '@/constants/apiUrl';
import apiClient from './apiClient';

export const getProductList = () => {
  return apiClient.request<
    {
      ai_type: string;
      like: number;
      price: number;
      product_title: string;
      thumbnail: string;
      username: string;
    }[]
  >({
    method: 'get',
    url: PRODUCT_LIST_URL,
    withCredentials: true,
    params: {
      product_type: 'copyright',
    },
  });
};

interface IGetProductDetailEndPoint {
  productId: string;
}

export const getProductDetail = ({ productId }: IGetProductDetailEndPoint) => {
  return apiClient.request<{
    ai_type: string;
    description: string;
    price: number;
    product_type: string;
    thumbnail: string;
    title: string;
    username: string;
  }>({
    method: 'get',
    url: `${PRODUCT_LIST_URL}/${productId}`,
  });
};

export const registerProductTicket = () => {
  return apiClient({
    method: 'post',
    url: REGISTER_PRODUCT_URL,
    withCredentials: true,
    data: {
      product_id: 'dddddd',
    },
  });
};

interface IBuyCopyright {
  productId: string;
}

export const buyCopyright = ({ productId }: IBuyCopyright) => {
  return apiClient.request<string>({
    method: 'patch',
    url: BUY_COPYRIGHT_URL,
    withCredentials: true,
    data: {
      product_id: productId,
    },
  });
};

export const buyTicket = ({ productId }: IBuyCopyright) => {
  return apiClient({
    method: 'post',
    url: BUY_TICKET_URL,
    withCredentials: true,
    data: {
      product_id: productId,
    },
  });
};
