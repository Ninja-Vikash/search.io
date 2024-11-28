import "./globals.css";

export const metadata = {
  title: "search.io",
  description: "An explorer to explore the web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
