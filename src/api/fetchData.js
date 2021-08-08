import { BASE_URL, ERROR_MESSAGE } from '../utils/config';

const fetcher = async (URL) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error('서버 상태가 이상합니다!');
    return await response.json();
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
};

export const fetchData = async (page, limit) =>
  await fetcher(`${BASE_URL}/comments?_page=${page}&_limit=${limit}`);
