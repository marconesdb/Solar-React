import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
export default function MensagemEnviada() {
  return (
    <div>
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Mensagem Enviada com Sucesso!</h1>
        <p className="text-lg text-center">Obrigado por entrar em contato conosco. Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
      </div>
      <Footer />
    </div>
    </div>
  )
}
