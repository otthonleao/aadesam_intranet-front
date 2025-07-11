import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { cn } from "@/lib/utils";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { TCE_CardItemLicitacao, TCE_CardLicitacao, TCE_CardLicitacaoHistorico, TCE_CardPublicacao } from "./presidencia/col/page";
// import { ThemeProvider } from "@/components/theme-provider";
// import { ModeToggle } from "@/components/mode-toogle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SISTEMA AADESAM",
  description: "Sistema Intranet da AADESAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Presidência</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Comissão de Licitação</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>TCE - eContas</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <div>
                <TCE_CardLicitacao></TCE_CardLicitacao>
              </div>
              <div>
                <TCE_CardItemLicitacao></TCE_CardItemLicitacao>
              </div>
              <div>
                <TCE_CardLicitacaoHistorico></TCE_CardLicitacaoHistorico>
              </div>
              <div>
                <TCE_CardPublicacao></TCE_CardPublicacao>
              </div>
            </div>
          </SidebarInset>
            {/* <main className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full h-screen">
              <div className="flex gap-3 items-center">
                <SidebarTrigger />
                <ModeToggle />
              </div> */}
              {children}
            {/* </main> */}
        </SidebarProvider>
      </body>
    </html>
  );
}
