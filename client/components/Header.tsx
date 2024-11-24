import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary text-white">
      <h1 className="text-2xl font-bold">Todolist</h1>
      <ModeToggle />
    </header>
  );
};

export default Header;