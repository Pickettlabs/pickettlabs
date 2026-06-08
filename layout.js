
1 export const metadata = {
2  title: "Pickett Labs",
3  description: "Build Your Beat Empire",
4 };
5
6 export default function RootLayout({ children }) {
7  return (
8    <html lang="en">
9      <body>{children}</body>
10    </html>
11  );
12 }
