import React from 'react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../context/CartContext'
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Grid, GridItem, Center} from '@chakra-ui/react'
import '../styles/form.css'
import { Link } from 'react-router-dom'

const Form = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirmation, setEmailConfirmation] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [orderId, setOrderId] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [visible, setVisible] = useState(true)
  const { cart, totalPrice, clearCart } = useCartContext()

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || lastName === '' || phone === '' || email === '' || emailConfirmation === '' || birthDate === '') {
      alert('Hay campos vacíos. Por favor completa todos tus datos antes de finalizar la compra.')
      return
    }
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id), setVisible(false), setSubmitted(true));
    clearCart()
  }


  const ordersCollection = collection(db, 'orden');

  const order = {
    buyer: {
      name, lastName, phone, email, emailConfirmation, birthDate
    },
    items: { cart },
    total: totalPrice(),
  }
  console.log(order);

  return (
    <div>
      {visible && (
        <div className='container-form'>
          <FormControl isRequired className='form'>
            <Grid
              templateRows='repeat(2, 0.5fr)'
              templateColumns='repeat(5, 1fr)'
              gap={4}
            >
              <GridItem rowSpan={2} colSpan={1}>
                <FormLabel className='label'>Nombre</FormLabel>
                <Input border='2px solid rgb(161, 21, 91)' type='text' placeholder='First name' onChange={(e) => setName(e.target.value)} />
                <FormLabel className='label'>Apellido</FormLabel>
                <Input border='2px solid rgb(161, 21, 91)' type='text' placeholder='Last name' onChange={(e) => setLastName(e.target.value)} />
              </GridItem>
              <GridItem colSpan={2} >
                <FormLabel className='label'>Email</FormLabel>
                <Input border='2px solid rgb(161, 21, 91)' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <FormLabel className='label'>Confirmación Email</FormLabel>
                <Input border='2px solid rgb(161, 21, 91)' type='email' placeholder='Email confirmation' onChange={(e) => setEmailConfirmation(e.target.value)} />
              </GridItem>
              <GridItem colSpan={2} >
                <FormLabel className='label'>Telefono</FormLabel>
                <InputGroup>
                  <InputLeftAddon border='2px solid rgb(161, 21, 91)' color=' rgb(161, 21, 91)' children='+54' />
                  <Input border='2px solid rgb(161, 21, 91)' type='tel' placeholder='Phone number' onChange={(e) => setPhone(e.target.value)} />
                </InputGroup>
                <FormLabel className='label'>Fecha de nacimiento</FormLabel>
                <Input border='2px solid rgb(161, 21, 91)' color=' rgb(161, 21, 91)' placeholder="Birth Date" size="md" type="date" onChange={(e) => setBirthDate(e.target.value)}
                />
              </GridItem>
            </Grid>
            <Center>
              <Button color='rgb(157, 6, 94)' backgroundColor='rgba(157, 6, 94, 0.419)' height='50px' fontSize='1.22rem' className='buy-button' type='submit' onClick={handleSubmit} >Finalizar compra</Button>
            </Center>
                
          </FormControl>
        </div>
      )}

      {submitted && (
        <div className='completed'>
          <h5 className='text'>Compra realizada con exito!</h5>
          <p className='text'>Tu numero de orden es: {orderId}</p>
          <Link className='button-completed' to={'/'}><Button color='rgb(157, 6, 94)' border='2px solid rgb(157, 6, 94)' height='50px' fontSize='1.22rem' className='buttonC'> Volver al inicio</Button></Link>
        </div>
      )}
    </div>
  )
}

export default Form