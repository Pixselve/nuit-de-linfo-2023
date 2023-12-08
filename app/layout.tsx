import HadoukenWrapper from "@/components/hadouken";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pat the Waldo Dog",
  description:
    "Un projet réalisé par des étudiants de l'ESIR pour la nuit de l'info 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="h-full">
      <body
        className="relative h-full overflow-hidden"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <HadoukenWrapper className="h-full overflow-y-auto overflow-x-hidden bg-slate-200 ">
          {children}
        </HadoukenWrapper>
      </body>
    </html>
  );
}
