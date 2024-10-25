import clsx from "clsx";
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import { Tooltip, TooltipContent, TooltipTrigger } from "../tool-tip/tool-tip";
import { Link } from "react-router-dom";

export function NavItem({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const pathname = "";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className={clsx(
            "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
            {
              "bg-accent text-black": pathname === href,
            }
          )}
        >
          {children}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}
