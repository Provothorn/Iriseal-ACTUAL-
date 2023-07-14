import React,{useState,useEffect} from 'react'
import './App.css';
import {collection,getDocs,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore'
import {db} from './firebase-config'

function UserList() {

const [users, setUsers] = useState([])
const usersCollectionRef = collection(db,"user")
const [newName,setNewName]= useState("")
const [newAge,setNewAge] = useState(0)

function createUser(event){
  event.preventDefault()
  console.log(newName,newAge)
  addDoc(usersCollectionRef,{name: newName, age: newAge})
}

const deleteUser = async (id)=>{
  const userDoc = doc(db,"user",id)
  await deleteDoc(userDoc)
}

useEffect(()=>{
  const showUsers = async ()=>{
    try{
        const data = await getDocs(usersCollectionRef)
        setUsers(data.docs.map((doc)=>({
          ...doc.data(), id: doc.id
        })))
        console.log(users)
    }
    catch(err){
      console.error(err)
    }
  }
  showUsers()
},[])

  return (
    <div className="App">
      <form>
        <input name="name" onChange={(event)=>setNewName(event.target.value)}/>
        <input name="age" type="number" onChange={(event)=>setNewAge(event.target.value)}/>
        <button type='submit' onClick={createUser}>Create</button>
      </form>
      <div>
        {
          users.map((person)=>{
            return <div>
              {" "}
              <h1>Name: {person.name}</h1>
              <h2>Age: {person.age}</h2>
              <button onClick={()=>{deleteUser(person.id)}}>Delete</button>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default UserList;
