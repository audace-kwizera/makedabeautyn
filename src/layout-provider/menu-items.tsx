import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { IUser } from '@/interfaces'
import { Calendar, LayoutDashboard, List, MessageCircle, User2 } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie'
import usersGlobalStore, { IUsersGlobalStore } from '@/store/users-global-store'

interface MenuItemsProps {
    openMenuItems: boolean;
    setOpenMenuItems: (openMenuItems: boolean) => void;
}

function MenuItems({ openMenuItems, setOpenMenuItems }: MenuItemsProps) {
    const { user } = usersGlobalStore() as IUsersGlobalStore;
    const pathname = usePathname();
    const router = useRouter();

    const onLogout = () => {
        try {
            Cookies.remove("token");
            Cookies.remove("role");
            router.push("/login");
            toast.success("Déconnecté avec succès");
        } catch (error) {
            toast.error("Une erreur est survenu, Réessayer plus tard");
        }
    }

    let userMenuItems = [
        {
            title: 'Dashboard',
            route: '/user/dashboard',
            icon: <LayoutDashboard size={13} />
        },
        {
            title: 'Rendez-vous',
            route: '/user/schedule-appointment',
            icon: <Calendar size={13} />
        },
        {
            title: 'Mes Rendez-Vous',
            route: '/user/my-appointments',
            icon: <List size={13} />
        },
        {
            title: 'Profile',
            route: '/user/profile',
            icon: <User2 size={13} />
        }
    ];

    let salonSpaOwnerMenuItems = [
        {
            title: 'Dashboard',
            route: '/salon-spa-owner/dashboard',
            icon: <LayoutDashboard size={13} />
        },
        {
            title: 'Salons & Spas',
            route: '/salon-spa-owner/salons-spas',
            icon: <List size={13} />
        },
        {
            title: 'Rendez-Vous',
            route: '/salon-spa-owner/appointments',
            icon: <Calendar size={13} />
        },
        {
            title: 'Avis',
            route: '/salon-spa-owner/feedback-reviews',
            icon: <MessageCircle size={13} />
        },
        {
            title: 'Profile',
            route: '/salon-spa-owner/profile',
            icon: <User2 size={13} />
        }
    ];

    const menuItemsToRender = user?.role === "user" ? userMenuItems : salonSpaOwnerMenuItems;

    return (
        <Sheet
            open={openMenuItems}
            onOpenChange={setOpenMenuItems}
        >
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-10 mt-20 px-7">
                    {menuItemsToRender.map((menuItem, index) => (
                        <div
                            className={`flex gap-5 items-center p-2 rounded-md cursor-pointer
                        ${pathname === menuItem.route
                                    ? "bg-gray-100 border border-gray-500"
                                    : "text-gray-500"
                                }
                    `}
                            key={index}
                        >
                            <div className='text-black'>
                                {menuItem.icon}
                            </div>
                            <span className="text-sm! text-black">
                                {menuItem.title}
                            </span>
                        </div>
                    ))}

                    <Button
                        onClick={onLogout}
                    >
                        Se déconnecter
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MenuItems