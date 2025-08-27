import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState<string[]>([]);

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

      {/* Formulário de cadastro */}
      <form
        onSubmit={e => {
          e.preventDefault();
          if (email.trim() !== '') {
            setEmails([...emails, email]);
            setEmail('');
          }
        }}
        style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          style={{ padding: '8px', fontSize: '1rem', borderRadius: '4px', border: 'none', marginBottom: '8px', width: '250px' }}
          required
        />
        <button
          type="submit"
          style={{ padding: '8px 16px', fontSize: '1rem', borderRadius: '4px', background: '#4fc3f7', color: '#222', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Cadastrar e-mail
        </button>
      </form>

      {/* Lista de e-mails cadastrados */}
      {emails.length > 0 && (
        <div style={{ marginTop: '24px' }}>
          <h3>E-mails cadastrados:</h3>
          <ul>
            {emails.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;