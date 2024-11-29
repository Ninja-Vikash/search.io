/**
 * Components
 */
import Header from "@components/header";
import Footer from "@components/footer";
import StyledButton from "@components/ui/button";
import { Icon_GitHub, Icon_Support } from "@assets/icon";

/**
 * Section
 */
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Header title={"solution.io"} />
      <main className="flex justify-between items-center w-3/4 mx-auto">
        <div>
          <h1 className="text-8xl font-sans tracking-tight font-bold">
            Solution.io
          </h1>
          <h4 className="text-xl font-mono  mt-1 text-zinc-500">
            is the ultimate application for you
          </h4>

          {/* Button Actions */}
          <div className="mt-10 flex gap-4">
            <StyledButton color={"rose-500"}>
              Collaborate <Icon_Support />
            </StyledButton>

            <StyledButton
              url={"https://github.com/Ninja-Vikash/solution.io"}
              color={"transparent"}
              className={"border border-zinc-600"}
            >
              GitHub <Icon_GitHub className="invert" height={20} width={20} />
            </StyledButton>
          </div>
        </div>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
