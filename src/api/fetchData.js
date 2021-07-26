const fetcher = async (URL) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("서버 상태가 이상합니다!");
    return await response.json();
  } catch (error) {
    throw new Error(`무언가 잘못 되었습니다! ${error.message}`);
  }
};

export const getCards = async (limit, page) =>
  await fetcher(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
