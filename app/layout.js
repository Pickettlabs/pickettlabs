import "./globals.css";

export const metadata = {
  title: "Pickett Labs",
  description: "Beat Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
