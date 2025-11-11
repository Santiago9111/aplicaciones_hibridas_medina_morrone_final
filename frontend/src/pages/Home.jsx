import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <Navbar />

      <header style={{ marginTop: "50px" }}>
        <h1 style={{ color: "#76c893", fontSize: "2.2rem" }}>
          Bienvenido {user ? user.username : "sobreviviente"} 🪖
        </h1>
        <p style={{ color: "#ccc", marginTop: "10px" }}>
          Esta es la base de datos interactiva del universo de <b>The Last of Us</b>.
          Aquí podés gestionar personajes y localizaciones, explorar datos y sobrevivir un poco más al apocalipsis.
        </p>
      </header>

      <section style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        marginTop: "60px",
        flexWrap: "wrap"
      }}>
        <div style={{
          background: "#2b2b2b",
          padding: "25px",
          borderRadius: "15px",
          width: "250px",
          boxShadow: "0 0 10px rgba(0,0,0,0.6)"
        }}>
          <h2>🧍 Personajes</h2>
          <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
            Consulta, edita o elimina los personajes de la saga.
          </p>
          <Link
            to="/humans"
            style={{
              display: "inline-block",
              marginTop: "10px",
              background: "#76c893",
              color: "#111",
              textDecoration: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              fontWeight: "bold"
            }}
          >
            Ver personajes
          </Link>
        </div>

        <div style={{
          background: "#2b2b2b",
          padding: "25px",
          borderRadius: "15px",
          width: "250px",
          boxShadow: "0 0 10px rgba(0,0,0,0.6)"
        }}>
          <h2>🌍 Localizaciones</h2>
          <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
            Administra las distintas zonas del mundo infectado.
          </p>
          <Link
            to="/infecteds"
            style={{
              display: "inline-block",
              marginTop: "10px",
              background: "#76c893",
              color: "#111",
              textDecoration: "none",
              padding: "8px 15px",
              borderRadius: "6px",
              fontWeight: "bold"
            }}
          >
            Ver localizaciones
          </Link>
        </div>
      </section>

      <footer style={{
        marginTop: "80px",
        color: "#666",
        fontSize: "0.85rem"
      }}>
        <p>© 2025 - Aplicaciones Híbridas | Desarrollado por Santiago Medina & Tomás Morrone</p>
      </footer>
    </div>
  );
}