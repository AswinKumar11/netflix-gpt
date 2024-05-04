import { OPTIONS } from "../constants";
import openai from "../openAI";

const SearchInTMDB = async (movieName) => {
  const searchResultsData = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
    OPTIONS
  );
  const json = await searchResultsData.json();
  return json.results;
};
export const chatGptApi = async (chatGPTPromptMessage) => {
  const searchResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: chatGPTPromptMessage }],
    model: "gpt-3.5-turbo",
  });
  console.log(searchResults.choices?.[0]?.message.content);
  const response = searchResults.choices?.[0]?.message.content.split(",");
  console.log(response);
  const promiseArr = response.map((movie) => SearchInTMDB(movie));
  const movieResult = await Promise.all(promiseArr);
  console.log(movieResult);
};
