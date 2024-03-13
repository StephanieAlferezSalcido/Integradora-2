import React, { useState } from 'react'
import './sign.css'
import { Link } from 'react-router-dom'
import firebase from './firebaseConf'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const submit = async (e) =>{

        e.preventDefault()
        try
        {
            const user = await firebase.auth().signInWithEmailAndPassword(email,pass)
            if (user)
            {
                alert("Inicio de sesión con éxito")
            }
        }
        catch (error)
        {
            alert(error)
        }

    }
  return (
   <>
   <div className='main_container_signin'>
    <div className='header'>
        <h2>Iniciar sesión</h2>
    </div>
        <div className='box'>
        <input type='email' value={email} placeholder='Correo electrónico' onChange={(e) => setEmail(e.target.value)}>
        </input>
    </div>
    <div className='box'>
        <input type='password' value={pass} placeholder='Contraseña' onChange={(e) => setPass(e.target.value)}>
        </input>
    </div>
    <p>¿No tienes una cuenta? <Link to="/">Crear cuenta</Link></p>
    <button onClick={submit}> <Link to="/home" style={{ textDecoration: 'none' }}>Entrar</Link></button>
    </div>
    
   </>
  )
}

export default Login