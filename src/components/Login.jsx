import { useState } from 'react';
import { LoginContainer, LoginForm, Input, Button } from '../styles/Login';
import { setStorage } from '../localStorage/Local';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(''); // Estado para armazenar o nome de usuário
  const [password, setPassword] = useState(''); // Estado para armazenar a senha
  const [error, setError] = useState(''); // Estado para capturar erros

  const handleSubmit = (e) => { // Função para realizar o login com credenciais codificadas
    e.preventDefault(); // Previne o comportamento padrão do formulário
    
    
    if (username === 'cami' && password === '123') {
      setStorage('token', 'dummy-token'); // Armazena um token fictício no localStorage
      onLogin(); // Chama a função onLogin passada como prop se as credenciais estiverem corretas
    } else {
      setError('Credenciais inválidas'); 
    } 
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;