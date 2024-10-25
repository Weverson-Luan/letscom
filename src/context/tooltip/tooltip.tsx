import { TooltipProvider } from "../../presentation/components/tool-tip/tool-tip";

export default function ProvidersTooltip({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
