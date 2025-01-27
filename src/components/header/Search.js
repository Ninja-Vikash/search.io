/**
 * Api
 */
import { getResults } from "@api/getResults";

/**
 * Assets
 */
import { Icon_Image, Icon_Search } from "@assets/icon";

export default function Search({ query, setQuery, setResults }) {
  const getResultsApi = async (query, type) => {
    try {
      const resultResponse = await getResults(query, type);
      console.log("Data Received: ", resultResponse.status);
      setResults(resultResponse.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="my-4  flex justify-center gap-2">
      <input
        type="text"
        className="xs:w-auto lg:w-2/4 h-12 px-4 outline-none rounded-md text-zinc-900"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="What is html?"
      />
      <button
        type="submit"
        onClick={() => getResultsApi(query, "search")}
        className="px-3 bg-cyan-600 font-sans rounded-md"
      >
        <Icon_Search />
      </button>
      <button
        type="submit"
        onClick={() => getResultsApi(query, "imagesearch")}
        className="px-3 border bg-transparent border-zinc-600 font-sans rounded-md"
      >
        <Icon_Image />
      </button>
    </div>
  );
}
