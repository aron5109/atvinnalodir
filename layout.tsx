import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="vd">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
