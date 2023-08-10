'use client'

import styles from './styles.css'

import { useState } from 'react';

export default function HikingForm () {
    const [formData, setFormData] = useState();

   const handleSubmit = (event) => {

        event.preventDefault()

        const userName = event.target.userName.value
        const password = event.target.password.value
        const email = event.target.email.value
        console.log("userName, password, email:", userName, password, email)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>
                Username 
                <input type='text' id='userName' name='Username'></input>
            </label>
            <label>
                Password 
                <input type='password' id='password' name='password'></input>
            </label>
            <label>
                Email
                <input type='email' id='email' name='email'></input>
            </label>

            <button type="submit" name="Submit">Submit</button>
        </form>
    )
}