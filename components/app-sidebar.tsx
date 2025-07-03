"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  House,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavPresidencia } from "@/components/nav-presidencia";
import { NavDAF } from "@/components/nav-daf";
import { NavDIT } from "@/components/nav-dit";
import { NavProjects } from "@/components/nav-general";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavDDA } from "./nav-dda";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
    projects: [
    {
      name: "Home",
      url: "#",
      icon: House,
    },
  ],
  navPresidencia: [
    {
      title: "Diretor-Presidente",
      url: "#",
      isActive: false,
      items: [
        {
          title: "Repasse Financeiro",
          url: "#",
        },
        {
          title: "Recursos Humanos",
          url: "#",
        },
      ],
    },
    {
      title: "Comunicação Social - COS",
      url: "#",
    //   icon: Bot,
    },
    {
      title: "Contralodoria - CIC",
      url: "#",
	},
	{
      title: "Consultoria Técnica - COT",
      url: "#",
	},
	{
      title: "Consultoria Jurídica - COJ",
      url: "#",
	},
    {
      title: "Comissão Licitação - COL",
      url: "#",
      items: [
        {
          title: "TCE - e-Contas",
          url: "#",
        }
      ],
    },
	{
      title: "Ouvidoria - OUV",
      url: "#",
	},
  ],
  navDAF: [
    {
      title: "Diretoria - DAF",
      url: "#",
    //   icon: SquareTerminal,
    //   isActive: false,
    },
	{
      title: "Orçamentos e Finanças - GOF",
      url: "#",
	},
	{
      title: "Recursos Humanos - GRH",
      url: "#",
	},
	{
      title: "Apoio Logístico - GAL",
      url: "#",
	},
	{
      title: "Tecnologia Informação - GTI",
      url: "#",
	},
  ],
  navDIT: [
    {
      title: "Diretoria - DIT",
      url: "#",
    //   icon: SquareTerminal,
    //   isActive: false,
    },
	{
      title: "Elaboração de Projetos - GEP",
      url: "#",
	},
	{
      title: "Prestação de Contas - GPC",
      url: "#",
	},
	{
      title: "Monitoramento e Controle - GMP",
      url: "#",
	},
  ],
  navDDA: [
    {
      title: "Diretoria - DDA",
      url: "#",
    //   icon: SquareTerminal,
    //   isActive: false,
    },
	{
      title: "Pesquisa e Estudos - GET",
      url: "#",
	},
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-2xl font-extrabold">AADESAM</span>
                  <span className="truncate text-xs">Agência Amazonense de Desenvolvimento Econômico, Social e Ambiental</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
		<NavProjects projects={data.projects} />
        <NavPresidencia items={data.navPresidencia} />
		<NavDAF items={data.navDAF} />
        <NavDIT items={data.navDIT} />
		<NavDDA items={data.navDDA} />
        
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
