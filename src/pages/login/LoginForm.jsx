import React, { useState } from 'react'
import { ApiService } from '../../service';
import './loginForm.css'
import email_icon from './assets/email.png'
import password_icon from './assets/password.png'
import signin_icon from './assets/person.png'

const initialValue = {
    email: '',
    password: ''

}
let token = window.localStorage.getItem("token") || null

const LoginForm = () => {
    const [form, setForm] = useState(initialValue);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        ApiService.login(form)
        setForm(initialValue)
    }

    const handleLogout = (e) => {
        e.preventDefault();
        window.localStorage.removeItem("token");
      };
      
    return (
        <>
            {!token ? (
                <form onSubmit={handleSubmit} className="container">
                    <div className="header">
                        <div className="text">Signin</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <img src={email_icon} alt="email_icon" />
                            <input type="email" name='email' value={form.email} placeholder='abc@email.com' onChange={handleChange} />
                        </div>

                        <div className="input">
                            <img src={password_icon} alt="password_icon" />
                            <input type="password" name='password' value={form.password} placeholder='Ingrese su Conraseña' onChange={handleChange} />
                        </div>

                        <div className="input">
                            <img src={signin_icon} alt="person_icon" />
                            <input type="submit" value='Acceder' className='input input-submit' />
                        </div>
                    </div>
                </form>
            ) : (<div className='logout-container'>
                <button className='logout-btn' onClick={(e) => handleLogout(e)}>Salir</button>
            </div>)}
        </>
    )
}

export default LoginForm