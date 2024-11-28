import Logo from "./Logo";
import Search from "./Search";

export default function Header({ query, setQuery, setResults }) {
  return (
    <header className="xs:px-2 lg:px-32 py-6">
      <Logo value={"Search.io"} />
      <Search query={query} setQuery={setQuery} setResults={setResults} />
    </header>
  );
}
