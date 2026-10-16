
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f8fb",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#172b4d"
      }}
    >
      <h1>Dashboard InfoWow</h1>
      <p>
        Acompanhamento de aplicações,
        treinamentos e pendências | SP10
      </p>

      <section
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          padding: "24px",
          marginTop: "30px",
          border: "1px solid #e5e7eb"
        }}
      >
        <h2>Bem-vindo ao InfoWow</h2>
        <p>
          O painel está sendo preparado para
          receber os dados automaticamente
          através do n8n.
        </p>
      </section>
    </main>
  );
}
