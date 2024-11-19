"use client";

import { usePathname } from "next/navigation";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "./sidebar";

import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Fingerprint } from "lucide-react";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return isLoginPage ? (
    // Layout simplificado para /login
    <>{children}</>
  ) : (
    // Layout completo para outras rotas
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center bg-primary-foreground justify-between gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-6">
            <Button className="font-bold text-white" asChild>
                <Link href="/registrar-ponto">
                  Bater ponto
                  <Fingerprint/>
                </Link>
            </Button>
            <Separator orientation="vertical" />
            USER
          </div>
        </header>
        <main className="p-6">
            {children}
        </main> 
      </SidebarInset>
    </SidebarProvider>
  );
}
