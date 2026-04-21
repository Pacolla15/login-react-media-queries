import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <main>
        <section className='imagem'></section>
        <section className='direita'>
          <div className='logo'></div>
          <div className='login'>
              <h1>LOGIN</h1>
              <h2>Fazer Login</h2>          
              <p className='log_texto'>Email ou Usuário</p>
              <input type="text" placeholder='Digite seu email ou usuário' className='log_input'/>
              <p className='log_texto'>Senha</p>
              <input type="text" placeholder='Digite sua senha' className='log_input'/>
              <button>ENTRAR</button>
              <a href="">Criar conta</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
