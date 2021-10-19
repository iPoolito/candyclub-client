import React, { useContext, useState } from 'react'
import {
  Input,
  InputRightElement,
  InputGroup,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Image,
  Heading
} from '@chakra-ui/react'
import UsersContext from '../context/Users/UsersContex'
import backgroundImage from '../images/pnksmall.jpg'
import logo from '../images/candyclub.png'
export default function Adress() {
  const ctxUser = useContext(UsersContext)
  const { registerUser } = ctxUser

  const [show, SetShow] = useState(false)
  const handleShow = () => SetShow(!show)

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: ''
  })
  return <div>FORM DE LA DIRECCION</div>
}
