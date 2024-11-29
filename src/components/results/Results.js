export default function Results({ results }) {
  return (
    <>
      {results.map((result, index) => (
        <div key={index} className="mb-4">
          <a href={result?.link} target="_blank">
            <h2 className="text-xl font-medium leading-2">{result.title}</h2>
            <p className="text-xs text-blue-400 hover:underline">
              {result.link}
            </p>
          </a>
          <p className="font-medium text-sm mt-2 text-zinc-300">
            {result.snippet}
          </p>
          {result.thumbnailImageUrl && (
            <img
              src={result.thumbnailImageUrl}
              alt="image"
              height={"200px"}
              width={"300px"}
              className="object-contain mt-2"
            />
          )}
        </div>
      ))}
    </>
  );
}
