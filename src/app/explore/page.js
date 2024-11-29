"use client";

import { useState } from "react";

/**
 * Components
 */
import Header from "@components/header";
import ResultWrapper from "@components/container";
import Search from "@components/header/Search";
import Results from "@components/results";
import Footer from "@components/footer";

export default function Explore() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  return (
    <div className="min-h-[100vh] flex flex-col justify-between transition-all ease-in duration-400">
      <Header title={"explore.io"} />
      <Search query={query} setQuery={setQuery} setResults={setResults} />
      <ResultWrapper>
        <Results results={results} />
      </ResultWrapper>
      <Footer />
    </div>
  );
}
