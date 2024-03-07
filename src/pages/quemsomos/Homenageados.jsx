import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import homenageado1 from '../quemsomos/img-homenageados/Cunha.jpg';
import homenageado2 from '../quemsomos/img-homenageados/Sr-Joaquin.jpeg';
import homenageado3 from '../quemsomos/img-homenageados/Mariza.jpeg';

const homenageados = [
  { 
    nome: 'Alder Cunha', 
    descricao: 'Falecido Trabalhador do Centro Espírita Solar de Jesus',
    imagem: homenageado1
  },
  { 
    nome: 'Joaquim Araujo', 
    descricao: 'Falecido Trabalhador do Centro Espírita Solar de Jesus',
    imagem: homenageado2
  },


  { 
    nome: 'Marisa Santos Bonfim', 
    descricao: 'Falecia Trabalhadora do Centro Espírita Solar de Jesus',
    imagem: homenageado3
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
      <h1 className="text-3xl font-bold mt-24 text-center mb-4">Homenageados</h1>
      <p className='text-justify'>"Com profundo respeito e gratidão, prestamos neste espaço uma singela homenagem aos abnegados trabalhadores do Centro Espírita Solar de Jesus que já partiram para a vida espiritual. Suas vidas dedicadas ao estudo e à prática do Espiritismo deixaram um legado de amor, caridade e esclarecimento que permanecerá como inspiração para todos nós.

      Possamos honrar suas memórias seguindo seus nobres exemplos, cultivando a fraternidade, o conhecimento das leis divinas e o auxílio ao próximo. Que a luz do Evangelho de Jesus continue a iluminar seus caminhos na jornada infinita dos espíritos imortais.

      Nossos corações se elevam em prece de gratidão por suas vidas e obras em prol da causa maior da renovação espiritual da humanidade. Que possam prosseguir sua missão de esclarecimento e amparo das esferas espirituais superiores."</p>
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
