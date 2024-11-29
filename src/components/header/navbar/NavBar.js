import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <nav className="flex gap-5 px-4 py-2 bg-zinc-700/20 w-max rounded-lg">
      <NavItem text={"Home"} link={"/"} />
      <NavItem text={"Explore"} link={"/explore"} />
      <NavItem text={"Weather"} link={"/weather"} />
      <NavItem text={"About"} link={"/about"} />
    </nav>
  );
}
