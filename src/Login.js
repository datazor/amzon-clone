import React from 'react'
import './Login.css'
import {useState}  from 'react'
import {useNavigate ,Link} from 'react-router-dom'



function Login() {

    const name = "NULL";
    const [email , setEmail] = useState('')
    const [password ,setPassword] = useState('')


    async function LoginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/login', {
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

		if (data.user) {
            window.location.href="/"
		}
        else{
            alert('Please check your username and password')
        }
	
  
}
   
    return (
    <div className='login'>
        <Link to ='/'>
        <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="amazon__logo" />
        </Link>

        <div className='login__form'>
        <h2 className='login__title'>Sign In</h2>

        <form  onSubmit={LoginUser}>
       
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={(e) =>setPassword(e.target.value)} type='password' placeholder='password' />
        <input type="submit" value="Sign in" />

        </form>
        <p>
            DON'T WORRY THERE IS NO CONDITIONS !!!! Lemrabott :) 
         </p>

         <Link to ='/register'>
         <button className='login__createButton'> Create your Amazon account</button>
         </Link>



        </div>


    </div>
  )



}

export default Login ;