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
// import imagem15 from '../../public/Galeria/Evangelização Infantil/DSCN-2.jpg';
import imagem16 from '../../public/Galeria/Evangelização Infantil/DSCN-3.jpg';
import imagem17 from '../../public/Galeria/Evangelização Infantil/DSCN-5.jpg';
import imagem18 from '../../public/Galeria/Evangelização Infantil/DSCN-6.jpg';
import imagem19 from '../../public/Galeria/Evangelização Infantil/DSCN-7.jpg';
import imagem20 from '../../public/Galeria/Evangelização Infantil/DSCN9271.jpg';
import imagem21 from '../../public/Galeria/Evangelização Infantil/DSCN9293.jpg';
import imagem22 from '../../public/Galeria/Evangelização Infantil/DSCN9306.jpg';
import imagem23 from '../../public/Galeria/Evangelização Infantil/DSCN9398.jpg';
import imagem24 from '../../public/Galeria/Evangelização Infantil/DSCN9400.jpg';
import imagem25 from '../../public/Galeria/Evangelização Infantil/DSCN9403.jpg';
import imagem26 from '../../public/Galeria/Evangelização Infantil/DSCN9412.jpg';
import imagem27 from '../../public/Galeria/Evangelização Infantil/DSCN9413.jpg';
import imagem28 from '../../public/Galeria/Evangelização Infantil/IMG-1.jpeg';
import imagem29 from '../../public/Galeria/Evangelização Infantil/IMG-2.jpeg';
import imagem30 from '../../public/Galeria/Evangelização Infantil/IMG-3.jpeg';
import imagem31 from '../../public/Galeria/Social/1684416665155.jpg';
import imagem32 from '../../public/Galeria/Social/DSCN9252.jpg';
import imagem33 from '../../public/Galeria/Social/DSCN9256.jpg';
import imagem34 from '../../public/Galeria/Social/DSCN9265..jpg';

import imagem35 from '../../public/Galeria/Social/DSCN9277.jpg';
import imagem36 from '../../public/Galeria/Social/DSCN9285.jpg';

import imagem37 from '../../public/Galeria/Social/DSCN9321.jpg';
import imagem38 from '../../public/Galeria/Social/DSCN9335.jpg';
import imagem39 from '../../public/Galeria/Social/DSCN9337.jpg';

import imagem40 from '../../public/Galeria/Social/DSCN9348.jpg';

import imagem41 from '../../public/Galeria/Social/DSCN9378.jpg';

import imagem42 from '../../public/Galeria/Social/DSCN9408.jpg';

import imagem43 from '../../public/Galeria/Social/IMG_20230518_085933_860.jpg';


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
        description: 'Evangelização'
    },


    
    // {
    //     original: imagem15,
    //     thumbnail: imagem15,
    //     description: 'Evangelização'
    // },
    

    {
        original: imagem16,
        thumbnail: imagem16,
        description: 'Evangelização'
    },

    {
        original: imagem17,
        thumbnail: imagem17,
        description: 'Evangelização'
    },


    {
        original: imagem18,
        thumbnail: imagem18,
        description: 'Evangelização'
    },

    {
        original: imagem19,
        thumbnail: imagem19,
        description: 'Evangelização'
    },

    {
        original: imagem20,
        thumbnail: imagem20,
        description: 'Evangelização'
    },

    {
        original: imagem21,
        thumbnail: imagem21,
        description: 'Evangelização'
    },

    {
        original: imagem22,
        thumbnail: imagem22,
        description: 'Evangelização'
    },

    {
        original: imagem23,
        thumbnail: imagem23,
        description: 'Evangelização'
    },


    {
        original: imagem24,
        thumbnail: imagem24,
        description: 'Evangelização'
    },


    {
        original: imagem25,
        thumbnail: imagem25,
        description: 'Evangelização'
    },

    {
        original: imagem26,
        thumbnail: imagem26,
        description: 'Evangelização'
    },

    {
        original: imagem27,
        thumbnail: imagem27,
        description: 'Evangelização'
    },

    {
        original: imagem28,
        thumbnail: imagem28,
        description: 'Evangelização '
    },

    {
        original: imagem29,
        thumbnail: imagem29,
        description: 'Evangelização '
    },

    {
        original: imagem30,
        thumbnail: imagem30,
        description: 'Evangelização '
    },

    {
        original: imagem31,
        thumbnail: imagem31,
        description: 'Evangelização'
    },

    {
        original: imagem32,
        thumbnail: imagem32,
        description: 'Social'
    },
    {
        original: imagem33,
        thumbnail: imagem33,
        description: 'Social'
    },

    {
        original: imagem34,
        thumbnail: imagem34,
        description: 'Social'
    },

    
    {
        original: imagem35,
        thumbnail: imagem35,
        description: 'Social'
    },

    {
        original: imagem36,
        thumbnail: imagem36,
        description: 'Social'
    },

    {
        original: imagem37,
        thumbnail: imagem37,
        description: 'Social'
    },

    {
        original: imagem38,
        thumbnail: imagem38,
        description: 'Social'
    },


    {
        original: imagem39,
        thumbnail: imagem39,
        description: 'Social'
    },

    
    {
        original: imagem40,
        thumbnail: imagem40,
        description: 'Social'
    },


    {
        original: imagem41,
        thumbnail: imagem41,
        description: 'Social'
    },

    {
        original: imagem42,
        thumbnail: imagem42,
        description: 'Social'
    },


    {
        original: imagem43,
        thumbnail: imagem43,
        description: 'Social'
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
