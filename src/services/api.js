import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "PgJ8YZPbbzETI7QsD6gzmS92_1Qo5MpdHFskzGINips";

export const fetchImages = async (query = "", page) => {
  const response = await axios.get("", {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    params: {
      query,
      page,
      per_page: 12,
    },
  });
  return response.data.results;
};
