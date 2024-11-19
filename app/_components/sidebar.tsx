import { Calendar, ClipboardCheck, Clock, Home, Inbox, LassoSelect } from "lucide-react"
import Image from 'next/image';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/_components/ui/sidebar"
import { Separator } from "./ui/separator";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/login",
    icon: Home,
  },
  {
    title: "Meu Perfil",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Meu Ponto",
    url: "/registrar-ponto",
    icon: Clock,
  },
  {
    title: "Controle de ponto",
    url: "/controle-de-ponto",
    icon: Calendar,
  },
  {
    title: "Relatórios",
    url: "#",
    icon: ClipboardCheck,
  },
  {
    title: "Solicitação",
    url: "#",
    icon: LassoSelect,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
            <div className="flex justify-center items-center py-2">
                <Image src="/vectron-logo.png" alt="logo da vectron sistema de ponto" width={90} height={96} />
            </div>
            <Separator orientation="horizontal" className="my-2" />
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
