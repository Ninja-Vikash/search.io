/**
 * Api
 */
import { getResults } from "@api/getResults";
import Image from "next/image";

/**
 * Material Icons
 */
import SearchIcon from "../../assets/search.svg";
import ImageIcon from "../../assets/image.svg";

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
    <div className="mt-4  flex justify-center gap-2">
      <input
        type="text"
        className="xs:w-auto lg:w-2/4 h-12 px-4 outline-none rounded-md text-zinc-900"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => getResultsApi(query, "search")}
        className="px-3 bg-cyan-600 font-sans rounded-md"
      >
        <Image src={SearchIcon} alt="search" height={34} width={34} />
      </button>
      <button
        type="submit"
        onClick={() => getResultsApi(query, "imagesearch")}
        className="px-3 border border-cyan-600 font-sans rounded-md"
      >
        <Image src={ImageIcon} alt="image search" height={34} width={34} />
      </button>
    </div>
  );
}
