import { REGISTER_COPYRIGHT_URL, DECODE_PROMPT_URL } from '@/constants/apiUrl';
import apiClient from './apiClient';

interface IPostRegisterBody {
  AI_type: string;
  copyright_title: string;
  prompt: string;
}
export const postRegister = ({
  AI_type,
  copyright_title,
  prompt,
}: IPostRegisterBody) => {
  return apiClient({
    method: 'post',
    url: REGISTER_COPYRIGHT_URL,
    withCredentials: true,
    data: {
      AI_type,
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
