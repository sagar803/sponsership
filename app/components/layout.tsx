"use client"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname } from "next/navigation";



export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  const pathname = usePathname()
  return (
    <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <div className="border-b flex w-full p-4 text-sm items-center">
            <SidebarTrigger />
            <p>{pathname?.replace("/components", "")}</p>
          </div>
          <div>
            {children}
          </div>
        </main>
    </SidebarProvider>
  );
}