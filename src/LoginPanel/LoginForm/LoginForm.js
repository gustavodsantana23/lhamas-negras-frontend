export default function LoginForm ({handleSubmit, email, password, handleEmailChange, setPassword}) {
  return(
    <div className="form_wrapper">
      <form action="#" onSubmit={handleSubmit}>
        <div className="row">
          <input type="text" name="email" placeholder="Insira seu email..." required value={email} onChange={handleEmailChange} />
        </div>
        <div className="row">
          <input type="password" name="password" placeholder="Senha" required value={password} onChange={setPassword} />
        </div>
        <div className="pass"><a href="#">Esqueceu a senha?</a></div>
        <div className="row button">
          <input type="submit" value="Login" />
        </div>
        <div className="signup-link">Não é cadastrado? <a href="#">Cadastre-se aqui!</a></div>
      </form>
    </div>
  )
}