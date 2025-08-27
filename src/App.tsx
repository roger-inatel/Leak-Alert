import React from 'react';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#222',
        color: '#fff',
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '16px' }}>
        <span role="img" aria-label="shield">🛡️</span> LeakAlert
      </h1>
      <p style={{ maxWidth: 500, textAlign: 'center', fontSize: '1.3rem', marginBottom: '24px' }}>
        Seu e-mail protegido! Simule a detecção de vazamentos e aprenda sobre segurança digital.
      </p>
      <nav style={{ marginTop: 16 }}>
        <a href="#" style={{ color: '#4fc3f7', margin: '0 16px', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 'bold' }}>Início</a>
        <a href="#" style={{ color: '#4fc3f7', margin: '0 16px', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 'bold' }}>Cadastro</a>
        <a href="#" style={{ color: '#4fc3f7', margin: '0 16px', fontSize: '1.1rem', textDecoration: 'none', fontWeight: 'bold' }}>Histórico</a>
      </nav>
    </div>
  );
}

export default App;