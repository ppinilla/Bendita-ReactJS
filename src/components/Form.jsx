import React from 'react'
import { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../context/CartContext'
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

const Form = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [orderId, setOrderId] = useState(null)
  const { cart, totalPrice } = useCartContext();

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault()
    name === '' ? alert('Campo nombre vacio') : alert(`Bienvenido ${name}`)
    email === '' ? alert('Campo email vacio') : alert(`Registrado con el email: ${email}`)
    phone === '' ? alert('Campo telefono vacio') : alert(`Registrado con el telefono: ${phone}`)
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
  }

  const ordersCollection = collection(db, 'orden');

  const order = {
    buyer: {
      name, phone, email
    },
    items: cart.map(p => ({ id: p.id, title: p.title, price: p.price, quantity: p.quantity })),
    total: totalPrice(),
  }

  return (
    <div>
      <FormControl isRequired onSubmit={handleSubmit}>
        <FormLabel>Nombre</FormLabel>
        <Input type='text' placeholder='First name' onChange={(e) => setName(e.target.value)}/>
        <FormLabel>Email</FormLabel>
        <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <FormLabel>Telefono</FormLabel>
        <Input type='tel' placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>
        <Button mt={4}
            colorScheme='teal'
            type='submit'>Finalizar compra</Button>
      </FormControl>
      <h3>Id de tu compra: {orderId}</h3>
    </div>
  )
}

export default Form