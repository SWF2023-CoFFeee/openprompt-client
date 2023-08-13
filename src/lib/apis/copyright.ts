import {
  REGISTER_COPYRIGHT_URL,
  DECODE_PROMPT_URL,
  PRODUCT_LIST_URL,
} from '@/constants/apiUrl';
import apiClient from './apiClient';

export const getList = () => {
  return apiClient({
    method: 'get',
    url: PRODUCT_LIST_URL,
    withCredentials: true,
    params: {
      product_type: 'copyright',
    },
  });
};

interface IPostRegisterBody {
  ai_type: string;
  copyright_title: string;
  prompt: string;
}
export const postRegister = ({
  ai_type,
  copyright_title,
  prompt,
}: IPostRegisterBody) => {
  return apiClient({
    method: 'post',
    url: REGISTER_COPYRIGHT_URL,
    withCredentials: true,
    data: {
      ai_type,
      copyright_title,
      prompt,
    },
  });
};

interface IGetDecodedPromptParams {
  copyrightId: string;
}

export const getDecodedPrompt = ({ copyrightId }: IGetDecodedPromptParams) => {
  return apiClient({
    method: 'get',
    url: DECODE_PROMPT_URL,
    params: {
      copyrightId,
    },
  });
};
