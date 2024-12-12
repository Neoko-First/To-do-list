import { ModeToggle } from "./ModeToggle";
import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary text-white">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-2xl font-bold">Todolist</h1>
      </div>
      <ModeToggle />
    </header>
  );
};

export default Header;
