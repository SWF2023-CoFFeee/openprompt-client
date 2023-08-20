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

export const postRegisterWithFetch = async ({
  AI_type,
  copyright_title,
  prompt,
}: IPostRegisterBody) => {
  const response = await fetch(
    `https://localhost:8081${REGISTER_COPYRIGHT_URL}`,
    {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        AI_type,
        copyright_title,
        prompt,
      }),
    },
  );

  return response.json();
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
