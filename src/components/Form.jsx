import React from 'react'
import { useState, useContext } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../context/CartContext'
import { Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, RadioGroup, HStack, Radio, Grid, GridItem, Box, AbsoluteCenter } from '@chakra-ui/react'
import './form.css'

const Form = () => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirmation, setEmailConfirmation] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [orderId, setOrderId] = useState(null)
  const { submitted, setSubmitted } = useState(false)
  const { cart, totalPrice } = useCartContext()

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || lastName === '' || phone === '' || email === '' || emailConfirmation === '' || birthDate === '' || paymentMethod === '') {
      alert('Hay campos vacíos. Por favor completa todos tus datos antes de finalizar la compra.')
      return
    }
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id), setSubmitted(true))
  }

  const ordersCollection = collection(db, 'orden');

  const order = {
    buyer: {
      name, lastName, phone, email, emailConfirmation, birthDate, paymentMethod
    },
    items: { cart },
    total: totalPrice(),
  }

  return (
    <div>
      <FormControl isRequired className='form'>
        <Grid
          h='350px'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <FormLabel className='label'>Nombre</FormLabel>
            <Input type='text' placeholder='First name' onChange={(e) => setName(e.target.value)} />
            <FormLabel className='label'>Apellido</FormLabel>
            <Input type='text' placeholder='Last name' onChange={(e) => setLastName(e.target.value)} />
          </GridItem>

          <GridItem colSpan={2} >
            <FormLabel className='label'>Email</FormLabel>
            <Input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <FormLabel className='label'>Confirmación Email</FormLabel>
            <Input type='email' placeholder='Email confirmation' onChange={(e) => setEmailConfirmation(e.target.value)} />
          </GridItem>
          <GridItem colSpan={2} >
            <FormLabel className='label'>Telefono</FormLabel>
            <InputGroup>
              <InputLeftAddon children='+54' />
              <Input type='tel' placeholder='Phone number' onChange={(e) => setPhone(e.target.value)} />
            </InputGroup>
            <FormLabel className='label'>Fecha de nacimiento</FormLabel>
            <Input placeholder="Birth Date" size="md" type="date" onChange={(e) => setBirthDate(e.target.value)}
            />
          </GridItem>
          <GridItem colSpan={4}>
            <InputGroup>
              <FormLabel className='label'>Método de Pago</FormLabel>
              <RadioGroup /* value={paymentMethod} */ defaultValue='Credit Card' onChange={(e) => setPaymentMethod(e.target.value)} >
                <HStack spacing='24px'>
                  <Radio value='Credit Card'>Tarjeta de credito</Radio>
                  <Radio value='Debit Card'>Tarjeta de Debito</Radio>
                  <Radio value='Mercado Pago'>Mercado Pago</Radio>
                </HStack>
              </RadioGroup>
            </InputGroup>
          </GridItem>
        </Grid>
        <Box position='relative' h='30px'>
          <AbsoluteCenter p='4' className='button-container'>
            <Button className='buy-button' mt={4} type='submit' onClick={handleSubmit} >Finalizar compra</Button>
          </AbsoluteCenter>
        </Box>
      </FormControl>
      {submitted && (
        <div>
          <h5>Compra realizada con exito!</h5>
          <p>Tu numero de orden es: {orderId}</p>
          <Link to={'/'}><Button>Volver al inicio</Button></Link>
        </div>
      )}
    </div>
  )
}

export default Form