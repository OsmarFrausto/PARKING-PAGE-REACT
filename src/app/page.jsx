export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido a Nuestra App</h1>
      <p>Por favor, inicia sesión o regístrate para continuar.</p>

      <div style={{ marginTop: '20px' }}>
        <a href="/auth/login">
          <button style={{ padding: '10px 20px', marginRight: '10px' }}>Login</button>
        </a>
        <a href="/auth/register">
          <button style={{ padding: '10px 20px' }}>Register</button>
        </a>
      </div>
    </div>
  );
}