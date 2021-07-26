const fetcher = async (URL) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) throw new Error("서버 상태가 이상합니다!");
    return await response.json();
  } catch (error) {
    throw new Error(`무언가 잘못 되었습니다! ${error.message}`);
  }
};

export const getData = async (page, limit) =>
  await fetcher(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`);
