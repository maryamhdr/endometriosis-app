import type {Metadata} from "next";
import "./globals.css";
import localFont from "next/font/local";

const firaSans = localFont({
    src: [
        {
            path: './fonts/FiraSans-Black.ttf',
            weight: '900',
            style: 'normal'
        },
        {
            path: './fonts/FiraSans-ExtraBold.ttf',
            weight: '800',
            style: 'normal'
        },
        {
            path: './fonts/FiraSans-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: './fonts/FiraSans-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/FiraSans-Medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/FiraSans-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/FiraSans-Light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: './fonts/FiraSans-ExtraLight.ttf',
            weight: '200',
            style: 'normal'
        },
        {
            path: './fonts/FiraSans-Thin.ttf',
            weight: '100',
            style: 'normal'
        },
    ],
    variable: '--font-fira-sans'
})

export const metadata: Metadata = {
    title: "Endometriosis Community",
    description: "Search, find, read, and communicate through the endometriosis community.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={firaSans.variable}>
        {children}
        </body>
        </html>
    );
}
