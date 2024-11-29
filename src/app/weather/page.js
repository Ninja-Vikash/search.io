import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";

export default function Weather() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header title={"weather.io"} />
      <main className="flex justify-center">
        <h2 className="text-xl font-sans">Coming soon</h2>
      </main>
      <Footer />
    </div>
  );
}
