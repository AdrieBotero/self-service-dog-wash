import type { ReactNode } from "react";

import "./KioskLayout.css";
import KioskHeader from "../../components/KioskHeader/KioskHeader";
import KioskFooter from "../../components/KioskFooter/KioskFooter";

type KioskLayoutProps = {
  children: ReactNode;
};

function KioskLayout({ children }: KioskLayoutProps) {
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
