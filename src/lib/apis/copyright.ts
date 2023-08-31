import { REGISTER_COPYRIGHT_URL, DECODE_PROMPT_URL } from '@/constants/apiUrl';
import apiClient from './apiClient';

interface IPostRegisterBody {
  prompt: string;
  AIType: string;
  copyrightTitle: string;
}
export const postRegister = ({
  AIType,
  copyrightTitle,
  prompt,
}: IPostRegisterBody) => {
  return apiClient({
    method: 'post',
    url: REGISTER_COPYRIGHT_URL,
    withCredentials: true,
    data: {
      AI_type: AIType,
      copyright_title: copyrightTitle,
      prompt,
    },
  });
};

interface IGetDecodedPromptParams {
  copyrightId: string;
}

export const getDecodedPrompt = ({ copyrightId }: IGetDecodedPromptParams) => {
  return apiClient.request<string>({
    method: 'get',
    url: DECODE_PROMPT_URL,
    params: {
      copyrightId,
    },
  });
};
