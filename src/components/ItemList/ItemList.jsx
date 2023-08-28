import Item from '../Item/Item'
import React from 'react'

const ItemList = ({prods = []}) => {
    return (
        prods.map(prod => <Item key={prod.id} info={prod} />)
    )
}

export default ItemList