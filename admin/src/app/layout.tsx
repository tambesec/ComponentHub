import { Outfit } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { TranslationProvider } from '@/context/TranslationContext';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <TranslationProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
