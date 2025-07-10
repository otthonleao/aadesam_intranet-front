"use client";

import * as React from "react";
import Image from "next/image";
import {
  House,
  LifeBuoy,
  Send,
} from "lucide-react";

import { NavPresidencia } from "@/components/sidebar/nav-presidencia";
import { NavDAF } from "@/components/sidebar/nav-daf";
import { NavDIT } from "@/components/sidebar/nav-dit";
import { NavProjects } from "@/components/sidebar/nav-general";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import { NavUser } from "@/components/sidebar/nav-user";
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
    name: "Otthon Leão",
    email: "otthon.leao@aadesam.org.br",
    avatar: "https://github.com/otthonleao.png",
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
            <SidebarMenuButton size="lg" asChild className="h-22">
              <a href="#">
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <Image src="/image/brand/aadesam-brand-white.png" alt="Logo AADESAM" className="h-22 object-contain" fill priority/>
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
