import "./globals.css";

export const metadata = {
  title: "Brynne & Thama · 20 September 2026",
  description:
    "The wedding of Brynne Prince & Thama Tshigabe. Inimitable Wedding Venue, Muldersdrift, Johannesburg. 20 September 2026.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
