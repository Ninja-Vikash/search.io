"use client";
import { useState } from "react";

/**
 * Components
 */
import Header from "@components/header";
import Results from "@components/results";
import ResultWrapper from "@components/container";
import Footer from "@components/footer";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header query={query} setQuery={setQuery} setResults={setResults} />
      <ResultWrapper>
        <Results results={results} />
      </ResultWrapper>
      <Footer />
    </div>
  );
}
