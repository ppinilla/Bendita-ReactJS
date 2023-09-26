import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {

  const [prods, setProds] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'tratamientos')
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProds(docs)
    })
  }, []);

  const filterProds = prods.filter ((prod) => prod.category === id)

  return (
    <>
      <Center>
        <h1>{greeting}</h1>
      </Center>
      {id ? <ItemList prods={filterProds} /> : <ItemList prods = {prods}/>}
    </>
  )
}

export default ItemListContainer