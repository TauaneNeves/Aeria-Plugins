import "./globals.css";

export const metadata = {
  title: "Aeria Plugins",
  description: "Plugins de alta performance para Minecraft",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}