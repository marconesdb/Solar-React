import React from 'react'
import  Navbar from '../../Navbar'
import  Footer from '../../Footer'
import img1 from '../contato/img-contato/img1 (2).png'
export default function Contato() {
  return (
    <div>
      <Navbar/>
      <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 mt-28">Entre em Contato Conosco</h1>
        {/* Formulário de Contato */}
        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Nome:</label>
              <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Telefone:</label>
              <input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">E-mail:</label>
              <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Mensagem:</label>
              <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <div>
              <button type="submit" className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600">Enviar Mensagem</button>
            </div>
          </form>
        </div>
        {/* Imagem */}
        <section className="mt-8   flex justify-center items-center">
       <img src={img1} alt="Imagem"    className="w-96 h-96 rounded-lg" />
        </section>


        {/* Mapa incorporado */}
        <h1 className="text-3xl font-bold text-center mb-8 mt-28">Nossa Localização</h1>
        <div className="mt-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30567.241047454525!2d-43.86806810711937!3d-16.731584744450497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab5499cbd6ed4b%3A0x252e94449b8c3ad0!2sInstitui%C3%A7%C3%A3o%20Esp%C3%ADrita%20De%20Caridade%20Solar%20De%20Jesus!5e0!3m2!1spt-BR!2sbr!4v1708212316098!5m2!1spt-BR!2sbr" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
      
    </div>
      
      <Footer/>
    </div>
  )
}