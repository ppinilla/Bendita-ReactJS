import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {

  const [prods, setProds] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'tratamientos');

    if (category) {
      const filterCollection = query(itemsCollection, where('category', '==', category))
      getDocs(filterCollection).then(res => setProds(res.docs.map(trat => ({ id: trat.id, ...trat.data() }))))
    } else {
      getDocs(itemsCollection).then(res => setProds(res.docs.map(trat => ({ id: trat.id, ...trat.data() }))))
    }
  }, [category]);

  return (
    <>
      <Center>
        <h1>{greeting}</h1>
      </Center>
      <ItemList prods={prods} />
    </>
  )
}

export default ItemListContainer