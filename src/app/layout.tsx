import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Análise de Hemogasometria",
  description: "Ferramenta para diagnóstico de distúrbios ácido-base",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Toaster position="top-right" />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}