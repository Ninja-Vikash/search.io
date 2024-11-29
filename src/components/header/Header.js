/**
 * Component
 */
import Logo from "./Logo";
import NavBar from "./navbar";
import NavActions from "./navbar/NavActions";

export default function Header({ title }) {
  return (
    <header className="xs:px-2 mx-auto w-3/4 py-4 flex items-center">
      <div className="grid grid-cols-3 w-full items-center relative">
        <Logo value={title} />

        <NavBar />

        <NavActions />
      </div>
    </header>
  );
}
