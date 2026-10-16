
export const metadata = {
  title: "InfoWow | Dashboard SP10",
  description:
    "Acompanhamento de aplicações e pendências de treinamentos InfoWow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
