import React,{useState} from 'react'
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut} from 'firebase/auth'
import {auth} from "../firebase-config"

const SignIn = () => {

    const [registerEmail,setRegisterEmail] = useState("")
    const [registerPassword,setRegisterPassword] = useState("")
    const [loginEmail,setLoginEmail] = useState("")
    const [loginPassword,setLoginPassword] = useState("")

    const [user,setUser] = useState({})

    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })

    const register = async () =>
    { 
        try{
            // console.log("Register")
            const user = 
            createUserWithEmailAndPassword(auth,loginEmail,loginPassword)
            // console.log(user)

        } 
        catch(err){
            console.error(err)

        }  
       
    }

    const signin = async ()=>{
       try{
            const user = await signInWithEmailAndPassword(
                auth,loginEmail,loginPassword
            )
       }
       catch(err){
        console.error(err)
       }
    }
    const logout = async ()=>{
       await signOut(auth)
   }

   return (
    <div>
        <form>
            <h1>Sign up</h1>
            <input name="email" type = "email" 
            onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
            {/* <input name="name"/> */}
            <input type='password' name="password"
             onChange={(event)=>{setRegisterPassword(event.target.value)}}/>
            <button type = "submit" onClick= {register}>Register</button>
        </form>
        <hr></hr>
        <form>
            <h1>Sign In</h1>
            <input name="sign_email" 
             onChange={(event)=>{setLoginEmail(event.target.value)}}/>
            <input type='password' name="sign_password"
             onChange={(event)=>{setLoginPassword(event.target.value)}}/>
            <button onClick={signin} >Sign In</button>
        </form>
        <h4>User logged In:</h4>
        {user?.email}
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default SignIn