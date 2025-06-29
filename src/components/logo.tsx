import { Cloud } from "lucide-react";

export function Logo() {
  return (
    <a href="#" className="flex items-center gap-2" prefetch={false}>
      <Cloud className="h-6 w-6 text-primary" />
      <span className="text-lg font-semibold tracking-tight">Cloud Next Extended Bandung</span>
    </a>
  );
}
