import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    // 1- Traer el servicio de firestore
    // 2- Crear un puntero al dato que queremos traer
    // 3- Traer el dato con una promesa

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const oneItem = doc(db, 'tratamientos',  id);
        getDoc(oneItem).then(res => setItem({id: res.id, ...res.data()}))
    }, [])

    return (
        <Flex justifyContent="center" alignItems="center" gap={10} p="4" flexWrap="wrap">
            <ItemDetail key={item.id} item={item} />
        </Flex>

    )
}

export default ItemDetailContainer