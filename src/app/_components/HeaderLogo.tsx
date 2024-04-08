import { forwardRef } from "react";
import { Logo } from "./index";

interface HeaderLogoProps {
  onClick?: () => void;
  href?: string;
}

const HeaderLogo = forwardRef<HTMLDivElement, HeaderLogoProps>(() => {
  return (
    <a
      className="flex items-center align-middle md:justify-start"
      href="https://www.travelperfect.io"
      target="_blank"
      aria-label="TravelPerfect"
    >
      <div className="flex cursor-pointer items-center align-middle md:justify-start">
        <Logo />

        {/* Title */}
        <h1 className="leading-tigher flex items-center text-3xl font-extrabold tracking-tighter md:text-4xl">
          <span className="text-zinc-900 dark:text-white">Travel</span>
          <span className="bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent">
            Perfect
          </span>
        </h1>
      </div>
    </a>
  );
});
HeaderLogo.displayName = "HeaderLogo";

export default HeaderLogo;
