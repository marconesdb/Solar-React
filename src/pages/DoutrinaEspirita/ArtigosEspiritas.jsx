import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

// import img1 from 'caminho/para/img1'; // Importe as imagens necessárias

export default function ArtigosEspiritas() {
  return (
    <div> {/* Adicionando margens laterais na versão mobile e centralizando na versão desktop */}
      <Navbar />
      <div>
        <h1 className='text-center mt-28 font-bold'>Artigo - A Caridade Segundo Jesus: Benevolência, Indulgência e Perdão das Ofensas</h1>
        {/* Container com imagens e texto */}
        <div className="mx-4 md:mx-auto flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start ml-4">
              <img src="https://via.placeholder.com/150" alt="Imagem 1" className="w-48 h-48 mx-2 mb-2" />
            </div>
          </div>
          <div className="md:w-1/2 text-black text-justify md:text-left mt-4 md:mt-0"> {/* Alterando o alinhamento do texto para justificado */}
            <div className="content text-justify">
              <div className="message-text ml-4 mr-4">
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus ipsa tempore, cupiditate, voluptates hic mollitia reiciendis ea quam dolorum ipsum rem minus temporibus quisquam veniam perferendis cum blanditiis maiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, pariatur? Cumque dicta eius quidem maxime, maiores reiciendis velit provident voluptatem deleniti voluptate rem fugit modi, debitis nisi temporibus beatae. Veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam quam iure officia consequuntur omnis recusandae incidunt libero error modi consectetur beatae expedita blanditiis quia, voluptates a! Magnam, neque voluptatem.
                <Link to='/caridade' className='text-orange400 font-bold'>Leia Mais</Link>
                
                
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artigo - 2 */}
      <div>
        <h1 className='text-center mt-16 font-bold'>Artigo - A coragem da fé segundo a doutrina espírita</h1>
        {/* Container com imagens e texto */}
        <div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start ml-4">
              <img src="https://via.placeholder.com/150" alt="Imagem 1" className="w-48 h-48 mx-2 mb-2" />
            </div>
          </div>
          <div className="md:w-1/2 text-black text-justify md:text-left mt-4 md:mt-0"> {/* Alterando o alinhamento do texto para justificado */}
            <div className="content">
              <div className="message-text text-justify ml-4 mr-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus ipsa tempore, cupiditate, voluptates hic mollitia reiciendis ea quam dolorum ipsum rem minus temporibus quisquam veniam perferendis cum blanditiis maiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, pariatur? Cumque dicta eius quidem maxime, maiores reiciendis velit provident voluptatem deleniti voluptate rem fugit modi, debitis nisi temporibus beatae. Veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam quam iure officia consequuntur omnis recusandae incidunt libero error modi consectetur beatae expedita blanditiis quia, voluptates a! Magnam, neque voluptatem. 
                <Link to='/coragem' className='text-orange400 font-bold'>Leia Mais</Link></p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fim do Artigo - 2 */}

      {/* ================= */}

      {/* Artigo - 3 */}
      <div>
        <h1 className='text-center mt-16 font-bold'>Artigo - O Evangelho Segundo o Espiritismo</h1>
        {/* Container com imagens e texto */}
        <div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start ml-4">
              <img src="https://via.placeholder.com/150" alt="Imagem 1" className="w-48 h-48 mx-2 mb-2" />
            </div>
          </div>
          <div className="md:w-1/2 text-black text-justify md:text-left mt-4 md:mt-0"> {/* Alterando o alinhamento do texto para justificado */}
            <div className="content">
              <div className="message-text text-justify ml-4 mr-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus ipsa tempore, cupiditate, voluptates hic mollitia reiciendis ea quam dolorum ipsum rem minus temporibus quisquam veniam perferendis cum blanditiis maiores?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, pariatur? Cumque dicta eius quidem maxime, maiores reiciendis velit provident voluptatem deleniti voluptate rem fugit modi, debitis nisi temporibus beatae. Veniam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam quam iure officia consequuntur omnis recusandae incidunt libero error modi consectetur beatae expedita blanditiis quia, voluptates a! Magnam, neque voluptatem. <Link to='/' className='text-orange400 font-bold'>Leia Mais</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fim do Artigo - 3 */}

      <Footer />
    </div>
    
  );
}
