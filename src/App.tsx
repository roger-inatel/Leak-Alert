import React, { useState } from 'react';

const vazados = [
  'rogerio@gmail.com',
  'lucca@gmail.com',
  'lucca2@gmail.com'
];

function App() {
  const [email, setEmail] = useState('');
  const [emails, setEmails] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [vazamentoMsg, setVazamentoMsg] = useState('');

  function verificarVazamento(email: string) {
    if (vazados.includes(email)) {
      setVazamentoMsg(`⚠️ Vazamento detectado para ${email}!`);
    } else {
      setVazamentoMsg(`✅ Nenhum vazamento encontrado para ${email}.`);
    }
  }

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
          if (emails.includes(email.trim())) {
            setError('E-mail já cadastrado!');
            setSuccess('');
            return;
          }
          if (email.trim() !== '') {
            setEmails([...emails, email]);
            setEmail('');
            setError('');
            setSuccess('E-mail cadastrado com sucesso!');
          }
        }}
        style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <input
          type="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            setError('');
            setSuccess('');
            setVazamentoMsg('');
          }}
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
        {error && (
          <div style={{ color: 'red', marginTop: '8px' }}>
            {error}
          </div>
        )}
        {success && (
          <div style={{ color: 'lightgreen', marginTop: '8px' }}>
            {success}
          </div>
        )}
      </form>

      {/* Lista de e-mails cadastrados */}
      {emails.length > 0 && (
        <div style={{ marginTop: '24px', background: '#333', padding: '16px', borderRadius: '8px', minWidth: '300px' }}>
          <h3 style={{ marginBottom: '12px' }}>E-mails cadastrados:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {emails.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '8px', color: '#4fc3f7', fontWeight: 'bold' }}>
                {item}
                <button
                  style={{
                    marginLeft: '12px',
                    padding: '4px 8px',
                    fontSize: '0.9rem',
                    borderRadius: '4px',
                    background: '#ff5252',
                    color: '#fff',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                  onClick={() => verificarVazamento(item)}
                >
                  Verificar vazamento
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mensagem de resultado da verificação */}
      {vazamentoMsg && (
        <div style={{ marginTop: '16px', fontWeight: 'bold', fontSize: '1.1rem' }}>
          {vazamentoMsg}
        </div>
      )}
    </div>
  );
}

export default App;