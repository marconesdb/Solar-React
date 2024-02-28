import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import imagem1 from '../../public/Galeria/Biblioteca/WhatsApp Image 2024-02-07 at 19.32.39(1).jpeg';
import imagem2 from '../../public/Galeria/Biblioteca/WhatsApp Image 2024-02-07 at 19.32.40(1).jpeg';

const images1 = [
    {
        original: imagem1,
        thumbnail: imagem1,
        description: 'Biblioteca'
    },
    {
        original: imagem2,
        thumbnail: imagem2,
        description: 'Biblioteca'
    }
];



const Galeria = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main>
                <div className="container mx-auto px-4 py-8 flex-grow">
                    <h1 className="text-xl font-bold mt-20 mb-4 text-center">Galeria de Fotos - Solar de Jesus</h1>
                    <div className="sm:hidden"> {/* Visível apenas em dispositivos móveis */}
                        <ImageGallery items={images1} showThumbnails={false} />
                    </div>
                    <div className="hidden sm:block"> {/* Visível apenas em dispositivos desktop */}
                        <ImageGallery items={images1} />
                    </div>
                    {/* Adicione aqui a segunda galeria de fotos, se necessário */}
                
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Galeria;
