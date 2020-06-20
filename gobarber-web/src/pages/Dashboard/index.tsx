import React from 'react';

const Dashboard: React.FC = () => {
  const logout = (): void => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    window.location.href = '/';
  };

  return (
    <div style={{ color: '#fff' }}>
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        illum aut iure dolorum provident, autem, perferendis adipisci at
        repellat veniam, quae sapiente iusto! Dolorum assumenda quaerat,
        doloremque tempore tenetur cupiditate.
      </p>

      <p>
        <button type="button" onClick={logout}>
          Fazer logout
        </button>
      </p>
    </div>
  );
};

export default Dashboard;
