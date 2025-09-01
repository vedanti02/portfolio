import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});
export const metadata: Metadata = {
    title: 'Vedanti Kshirsagar | Full Stack Developer | AI enthusiast',
    description: 'A modern portfolio',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${poppins.className} bg-gray-950 text-gray-100`}>
        {children}
        </body>
        </html>
    );
}
