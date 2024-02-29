import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import imagem1 from '../../public/Galeria/Biblioteca/WhatsApp Image 2024-02-07 at 19.32.39(1).jpeg';
import imagem2 from '../../public/Galeria/Biblioteca/WhatsApp Image 2024-02-07 at 19.32.40(1).jpeg';
import imagem3 from '../../public/Galeria/Costura/1684416665465.jpg';
import imagem4 from '../../public/Galeria/Costura/IMG-20230509-WA0004.jpg'
import imagem5 from '../../public/Galeria/Costura/IMG-20230509-WA0017.jpg';
import imagem6 from '../../public/Galeria/Costura/IMG_20220303_123717.jpg';
import imagem7 from '../../public/Galeria/Costura/IMG_20220323_151932.jpg';
import imagem8 from '../../public/Galeria/Costura/IMG_20220323_154230.jpg';
import imagem9 from '../../public/Galeria/Costura/IMG_20220519_142615.jpg';
import imagem10 from '../../public/Galeria/Costura/IMG_20230509_144430_284.jpg';
import imagem11 from '../../public/Galeria/Costura/IMG_20230517_222440_383.jpg';
import imagem12 from '../../public/Galeria/Costura/WhatsApp Image 2023-12-27 at 10.46.41.jpeg';
import imagem13 from '../../public/Galeria/Costura/WhatsApp Image 2023-12-27 at 10.55.53(1).jpeg';



import imagem14 from '../../public/Galeria/Evangelização Infantil/DSCN-1.jpg';
import imagem15 from '../../public/Galeria/Evangelização Infantil/DSCN-2.jpg';
import imagem16 from '../../public/Galeria/Evangelização Infantil/DSCN-3.jpg';
import imagem17 from '../../public/Galeria/Evangelização Infantil/DSCN-5.jpg';
import imagem18 from '../../public/Galeria/Evangelização Infantil/DSCN-6.jpg';
import imagem19 from '../../public/Galeria/Evangelização Infantil/DSCN-7.jpg';
import imagem20 from '../../public/Galeria/Evangelização Infantil/DSCN9271.jpg';
import imagem21 from '../../public/Galeria/Evangelização Infantil/DSCN9293.jpg';
import imagem22 from '../../public/Galeria/Evangelização Infantil/DSCN9306.jpg';
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
    },

    {
        original: imagem3,
        thumbnail: imagem3,
        description: 'Costura'
    },
    {
        original: imagem4,
        thumbnail: imagem4,
        description: 'Costura'
    },

    {
        original: imagem5,
        thumbnail: imagem5,
        description: 'Costura'
    },
    {
        original: imagem6,
        thumbnail: imagem6,
        description: 'Costura'
    },


    {
        original: imagem7,
        thumbnail: imagem7,
        description: 'Costura'
    },
    {
        original: imagem8,
        thumbnail: imagem8,
        description: 'Costura'
    },

    
    {
        original: imagem9,
        thumbnail: imagem9,
        description: 'Costura'
    },
    {
        original: imagem10,
        thumbnail: imagem10,
        description: 'Costura'
    },

    {
        original: imagem11,
        thumbnail: imagem11,
        description: 'Costura'
    },
    {
        original: imagem12,
        thumbnail: imagem12,
        description: 'Costura'
    },

    {
        original: imagem13,
        thumbnail: imagem13,
        description: 'Costura'
    },






    {
        original: imagem14,
        thumbnail: imagem14,
        description: 'Evangelização Infantil'
    },


    
    {
        original: imagem15,
        thumbnail: imagem15,
        description: 'Evangelização Infantil'
    },
    

    {
        original: imagem16,
        thumbnail: imagem16,
        description: 'Evangelização Infantil'
    },

    {
        original: imagem17,
        thumbnail: imagem17,
        description: 'Evangelização Infantil'
    },


    {
        original: imagem18,
        thumbnail: imagem18,
        description: 'Evangelização Infantil'
    },

    {
        original: imagem19,
        thumbnail: imagem19,
        description: 'Evangelização Infantil'
    },

    {
        original: imagem20,
        thumbnail: imagem20,
        description: 'Evangelização Infantil'
    },

    {
        original: imagem21,
        thumbnail: imagem21,
        description: 'Evangelização Infantil'
    },

    {
        original: imagem22,
        thumbnail: imagem22,
        description: 'Evangelização Infantil'
    },
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
