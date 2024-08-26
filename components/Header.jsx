import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sooryadev <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="./resume1.pdf" download>
            <Button>Resume</Button>
          </a>
        </div>

        <div className="xl:hidden flex justify-end">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
