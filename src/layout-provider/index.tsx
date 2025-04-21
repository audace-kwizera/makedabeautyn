'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import PrivateLayout from './private-layout';
import PublicLayout from './public-layout';

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const isPrivate = pathname.startsWith('/user') || pathname.startsWith('/salon-spa-owner');
    if (isPrivate) {
        return <PrivateLayout>{children}</PrivateLayout>
    }
    return <PublicLayout>{children}</PublicLayout>
}

export default LayoutProvider