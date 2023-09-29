import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { Center, Container, Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import Loading from './Loading'
import '../styles/itemLD.css'

const ItemListContainer = ({ greeting }) => {

  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'tratamientos')
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProds(docs)
      setLoading(false)
    })
  }, []);

  if (loading) {
    return <Loading />
  }

  const filterProds = prods.filter((prod) => prod.category === id)

  return (

    <div className='item'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        py={12}
        bgImage="url(src/img/pexels-arina-krasnikova-6663369.jpg)"
        bgPosition='center'
        bgRepeat='no-repeat'
        backgroundSize='cover'
        mb={2}
      >
        <Container maxW='md'>
          <Center className='greeting'>
            <h1>¡{greeting}!</h1>
          </Center>
        </Container>
      </Box>


      {id ? <ItemList prods={filterProds} /> : <ItemList prods={prods} />}
    </div>
  )
}

export default ItemListContainer