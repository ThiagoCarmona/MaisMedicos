
export const Concluido = () => {
  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        marginTop: '100px'
      }}>Concluido</h1>
      <p>Suas respostas foram enviadas, caso queira reenviar este questionário, por favor entre em contato com o administrador.</p>
      <p>andre.luiz@saude.gov.br</p>
      <button
        style={{
          margin: 'auto',
          display: 'block',
          marginTop: '50px',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#ff1e1e',
          color: '#fff',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}
        onClick={() => window.close()}
      >
        Fechar
      </button>
    </div>
  )
}