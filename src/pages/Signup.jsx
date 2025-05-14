import { useState } from 'react'

    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

const Signup = () => {
  return (
    <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>

        <label htmlFor="">Email:</label>
        <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={EMAIL}
        />

        <label htmlFor="">Password:</label>
        <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
        />

        <button>Sign up</button>

    </form>
  )
}

export default Signup