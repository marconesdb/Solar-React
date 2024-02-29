import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import homenageado1 from '../quemsomos/img-homenageados/Cunha.jpg';
import homenageado2 from '../quemsomos/img-homenageados/Sr-Joaquin.jpeg';

const homenageados = [
  { 
    nome: 'Nome do Homenageado 1', 
    descricao: 'Descrição do Homenageado 1',
    imagem: homenageado1
  },
  { 
    nome: 'Nome do Homenageado 2', 
    descricao: 'Descrição do Homenageado 2',
    imagem: homenageado2
  },
  // Adicione mais homenageados conforme necessário
];
  // Adicione mais homenageados conforme necessário
export default function Homenageados() {
  return (
    <div>
    <div>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Homenageados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homenageados.map((homenageado, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <img src={homenageado.imagem} alt={homenageado.nome} className="w-full mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{homenageado.nome}</h2>
            <p>{homenageado.descricao}</p>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
    </div>
    </div>
  )
}
