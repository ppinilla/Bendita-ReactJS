import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import { Flex } from '@chakra-ui/react'

const ItemDetailContainer = () => {

    const products = [
        { id: 1, title: 'HIFU', description: 'El HIFU FACIAL es una tecnologia de maxima eficiencia y penetracion, que consiste en la aplicacion de un haz de ultrasonido de alta frecuencia y alta energia. Esto genera una reestructuracion de las fibras de colageno y elastina, con la consiguiente remodelacion del tejido y efecto tensor.', price: 256, pictureUrl: 'https://clinicarochefort.cl/wp-content/uploads/2022/03/Lifting-Facial-con-HIFU.jpg' },
        { id: 2, title: 'Bioestimulador', description: 'Los bioestimuladores son sustancias inyectables que estimulan las celulas de fibroblastos del cuerpo en la produccion de colageno.', price: 290, pictureUrl: 'https://static.wixstatic.com/media/90f1b9_6413ebb67c914acbb983294d82cd45cf~mv2.jpg/v1/fill/w_640,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90f1b9_6413ebb67c914acbb983294d82cd45cf~mv2.jpg' },
        { id: 3, title: 'PEELING Periocular', description: 'Es un tratamiento para la zona periocular: arrugas, flacidez y ojeras. Repara tejidos envejecidos, favorece el drenaje linfatico y ayuda a reducir la permeabilidad capilar.', price: 120, pictureUrl: 'https://skinexpert.sesderma.com/wp-content/uploads/2018/04/bolsas-en-los-ojos.jpg' },
        { id: 4, title: 'Toxina Botulinica', description: 'La Toxina Botulínica es un medicamento que se usa ampliamente en medicina estética para el Rejuvenecimiento Facial sin cirugía. Nos ayuda a relajar la musculatura de la expresión facial, con lo que se pueden lograr borrar arrugas de expresión. Se utiliza principalmente para las arrugas en frente, entrecejo y patas de gallo. Aunque existen otros usos menos conocidos; como tratamiento para el mentón empedrado, bandas platismales del cuello, sonrisa gingival, bruxismo y depresión de la punta de la nariz al reir. ', price: 350, pictureUrl: 'https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/toxina-botulinica.jpg.webp?itok=CJXmTZGt' },
        { id: 5, title: 'Mesoterapia Lipolítica', description: 'La mesoterapia es un tratamiento que se caracteriza en inyecciones subcutáneas de distintas vitaminas, péptidos, extractos naturales y aminoácidos, logrando efectos distintos según lo que se desee. ', price: 85, pictureUrl: 'https://reducciondemedidas.com/wp-content/uploads/2023/03/Mesoterapia-Lipolitica.jpg' },
        { id: 6, title: 'Plasma Rico en Plaquetas Capilar', description: 'El plasma rico en plaquetas (PRP) capilar es un tratamiento que consiste en la extracción de una muestra de sangre del propio paciente, la cual es procesada para obtener una concentración de plaquetas y factores de crecimiento más alta que la que se encuentra de forma natural en la sangre. Luego, se inyecta este plasma en el cuero cabelludo para estimular el crecimiento y fortalecimiento del cabello.', price: 225, pictureUrl: 'https://cirujanoplasticomedellin.com/wp-content/uploads/2019/10/Plasma-rico-en-plaquetas-en-cuero-cabelludo.jpg' }
    ]

    const [item, setItem] = useState({});

    useEffect(() => {
        const getItem = new Promise(resolve => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });

        getItem.then(res => setItem(res))
    }, [])

    return (
        <Flex justifyContent="center" alignItems="center" gap={10} p="4" flexWrap="wrap">
            {products.map((item) => {
            return(<ItemDetail key={item.id} item={item}/>)
        }) }
        </Flex>
            
    )
}

export default ItemDetailContainer