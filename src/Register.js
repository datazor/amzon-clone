import React from 'react'
import {useState}  from 'react'
import {useNavigate} from 'react-router-dom'
import "./Register.css"


function Register() {
    const [name , setName] = useState('')
    const  [email , setEmail] = useState('')
    const [password ,setPassword] = useState('')


    async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
      console.log(data.user)
		if (data.user) {
            window.location.href="/login"
		}
	}

       
  return (
    <div className='register'>
     <img className='register__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt='amazon__logo'/>
      <div className='register__container'>
      <form className='register__form' onSubmit={registerUser}>
      <h2>Sign Up</h2>
      <input value={name} className='register__name' onChange={(e)=>setName(e.target.value)} type='text' placeholder='username' />
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
      <input value={password} onChange={(e) =>setPassword(e.target.value)} type='password' placeholder='password' />
      <input type="submit" value="Create Account" />
      </form>
       </div>
       </div>
  )
}

export default Register