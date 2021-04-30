import axios from "axios";

const apiKey = "wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu";

export const fetchArticles = async (query, page = 0) => {
  const url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?" +
    `q=${query}&` +
    `api-key=${apiKey}&` +
    `page=${page}&` +
    `sort=newest`;
  const res = await axios.get(url);
  const { docs } = await res.data.response;
  return docs;
};
