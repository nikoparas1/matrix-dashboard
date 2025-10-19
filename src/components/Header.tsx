import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Tv2Icon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-row justify-between w-full relative z-10 border-b border-border/20 backdrop-blur-sm bg-background/80">
      <div className="px-8 py-4 flex flex-col md:flex-row flex-1 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/matrix_logo.png"
            alt="Matrix Logo"
            className="w-10 h-10"
            width={100}
            height={100}
          />
          <span className="text-xl font-bold glow-text">Matrix</span>
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=trRO2M6eqnY"
          target="blank"
          className="hover:opacity-80 transition-opacity"
        >
          <Button
            style={{ cursor: "pointer" }}
            size="lg"
            className="text-lg px-8 py-6 bg-background/80 hover:bg-background/100 text-white matrix-border glow-text"
            variant={undefined}
          >
            Watch Demo <Tv2Icon className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </header>
  );
}
