import axios from "axios";

export async function getResults(query, type) {
  const options = {
    method: "GET",
    url: `https://google-search72.p.rapidapi.com/${type}`,
    params: {
      q: `${query}`,
      gl: "us",
      lr: "lang_en",
      num: "10",
      start: "0",
    },
    headers: {
      "x-rapidapi-key": "9063cd8c33msh54c3a9ba8a0c7c3p12b749jsne451929ded86",
      "x-rapidapi-host": "google-search72.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
