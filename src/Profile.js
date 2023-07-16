import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import React from 'react'
// import users from './database'
import { Link } from 'react-router-dom';
export default function Profile() {

    const [thisUser, setThisUser] = useState({})
    const [loading, setLoading] = useState(true)

    const params =useParams()
    useEffect(() => {
        // console.log("ali")
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id} `)
    .then(Response=>Response.json())
    .then((json)=>{
        setThisUser(json)
        setLoading(false)
    })
}, [])
console.log(thisUser)
    // const {id} =useParams();

    // console.log('id : ', id)

    // const thisUser = users.find(user => user.id == id)

    // if (!thisUser) return <p> 404 </p>

    if (loading) return <h1> loading </h1>

    return (
        <> 
              <div className='divporo'>
             <h1>{thisUser.id}</h1> 
             <img src={`https://robohash.org/${thisUser.id}?set=set2&size=200x200`} />
             {console.log(thisUser.id)}
              <h3> {thisUser.name} </h3> 
              <h4> {thisUser.address.street} </h4>
             <h4> {thisUser.address.street} </h4>
            
             <h4> {thisUser.address.zipcode} </h4>
             <Link to={'/'}> home </Link>
              </div> 


      </>
  )
}
