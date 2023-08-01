import { REGISTER_COPYRIGHT_URL, DECODE_PROMPT_URL } from '@/constants/apiUrl';
import apiClient from './apiClient';

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
    withCredentials: true,
    method: 'post',
    url: REGISTER_COPYRIGHT_URL,
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

export const getList = () => {
  return apiClient({
    method: 'get',
    url: '/api/v2/product',
    withCredentials: true,
  });
};
