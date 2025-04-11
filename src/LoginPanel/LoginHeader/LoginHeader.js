function LoginHeader({subtitle}) {

  return (
    <div className='header_wrapper'>
      <div className="title">
        <span>Lhamas Negras</span>
      </div>
      <p className='subtitle'>Apenas um site de exercício para {subtitle}</p>
    </div>
  )
}

export default LoginHeader;