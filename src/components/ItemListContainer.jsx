import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import Loading from './Loading'

const ItemListContainer = () => {

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

      {id ? <ItemList prods={filterProds} /> : <ItemList prods={prods} />}
    </div>
  )
}

export default ItemListContainer