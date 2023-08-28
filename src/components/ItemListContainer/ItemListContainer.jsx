import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { Center } from '@chakra-ui/react'

const ItemListContainer = ({ greeting }) => {

  const products = [
    { id: 1, title: 'HIFU', description: 'El HIFU FACIAL es una tecnologia de maxima eficiencia y penetracion, que consiste en la aplicacion de un haz de ultrasonido de alta frecuencia y alta energia. Esto genera una reestructuracion de las fibras de colageno y elastina, con la consiguiente remodelacion del tejido y efecto tensor.', price: 256, pictureUrl: 'https://clinicarochefort.cl/wp-content/uploads/2022/03/Lifting-Facial-con-HIFU.jpg' },
    { id: 2, title: 'Bioestimulador', description: 'Los bioestimuladores son sustancias inyectables que estimulan las celulas de fibroblastos del cuerpo en la produccion de colageno.', price: 290, pictureUrl: 'https://static.wixstatic.com/media/90f1b9_6413ebb67c914acbb983294d82cd45cf~mv2.jpg/v1/fill/w_640,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90f1b9_6413ebb67c914acbb983294d82cd45cf~mv2.jpg' },
    { id: 3, title: 'PEELING Periocular', description: 'Es un tratamiento para la zona periocular: arrugas, flacidez y ojeras. Repara tejidos envejecidos, favorece el drenaje linfatico y ayuda a reducir la permeabilidad capilar.', price: 120, pictureUrl: 'https://skinexpert.sesderma.com/wp-content/uploads/2018/04/bolsas-en-los-ojos.jpg' }
  ]

  const [prods, setProds] = useState([]);

  useEffect(() => {
    const getProds = new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products)
        }, 3000)
      } else {
        reject("No hay productos para mostrar")
      }
    });
    getProds.then(res => setProds(res));
  }, [])

  const onAdd = (quantity) => {
    //quantity en ItemListContainer es el mismo valor que count en ItemCount
    console.log('Agregaste', quantity, 'unidades');
  }

  return (
    <>
      <Center>
        <h1>{greeting}</h1>
      </Center>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <ItemList prods={prods} />
    </>
  )
}

export default ItemListContainer