import type { ReactNode } from "react";

import KioskHeader from 'src/components/KioskHeader/KioskHeader';
import KioskFooter from 'src/components/KioskFooter/KioskFooter';
import "./KioskLayout.css";

type KioskLayoutProps = {
  children: ReactNode;
};

function KioskLayout({ children }: KioskLayoutProps){
  return (
    <div className="kiosk-layout">
        <KioskHeader />
        <main className="kiosk-content"> 
          {children}
        </main>
        <KioskFooter />
    </div>
  )
    
};

export default KioskLayout;
