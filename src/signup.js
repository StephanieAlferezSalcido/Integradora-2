import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import firebase from './firebaseConf'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const submit = async (e) =>{

        e.preventDefault()
        try
        {
            const user = await firebase.auth().createUserWithEmailAndPassword(email,pass)
            if (user)
            {
                alert("Cuenta creada con éxito")
            }
        }
        catch (error)
        {
            alert(error)
        }

    }
  return (
   <>
   <div className='main_container_signup'>
    <div className='header'>
        <h2>Registrarse</h2>
    </div>
    <div className='box'>
        <input type='text' value={name} placeholder='Nombre' onChange={(e) => setName(e.target.value)}>
        </input>
        <div className='box'>
        <input type='email' value={email} placeholder='Correo electrónico' onChange={(e) => setEmail(e.target.value)}>
        </input>
    </div>
    <div className='box'>
        <input type='password' value={pass} placeholder='Contraseña' onChange={(e) => setPass(e.target.value)}>
        </input>
    </div>
    </div>
    <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
    <button onClick={submit}><Link to="/home" style={{ textDecoration: 'none' }}>Entrar</Link></button>
   </div>
   </>
  )
}

export default Signup