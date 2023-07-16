// import { Link } from 'react-router-dom';
import users from './database'
import React,{useState} from 'react'


export default function Home() {
  const [currentUser, setCurrentUser] = useState(null)
 const Read=(user)=>{
  setCurrentUser(user)

}



  return (
    <>
    {/* <div style={{color:"red"}}>home</div> */}
    {/* <Link to="/about">about</Link> */}
    {
      users.map (user=> {
        return (
        <div>
            <img src={`https://robohash.org/${user.id}?set=set2&size=200x200`} />
            {}
            <h3> {user.company.name} </h3>
            <h4> {user.address.street} </h4>
            <h4> {user.address.street} </h4>
            <h4> {user.address.city} </h4>
            <h4> {user.address.zipcode} </h4>
          </div>
        )
      })
    }
    </>
  )
}
