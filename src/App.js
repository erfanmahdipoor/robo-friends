import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
// import users from './database'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from 'react-router-dom';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function App() {

  const [users, setUsers] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  // const [geoOfUser,setgeoOfUser] =useState([51.505, -0.09])
  const openModal = (user) => {
      setIsModalOpen(true)
      setCurrentUser(user)
    // setgeoOfUser([user.geo.lat,user.geo.lng]) 
  }
   
  useEffect(() => {
    // console.log("ali")
fetch(` https://jsonplaceholder.typicode.com/users ${users}`)
.then(Response=>Response.json())
.then(json=>setUsers(json))
  }, [])
  console.log(users)
    function colseModal(){setIsModalOpen(false)}
 return (
 <div className="App">
     <div className='div1'>
      <h1 className='h'>robo-Friends</h1>
     {/* <Link to="/home" style={{backgroundColor:'red',color:"green",borderRadius:"50%"}}>about</Link> */}
      <input
      type='text'
      value={inputValue}
      onChange={event =>setInputValue(event.target.value)}
      className='in'/>
      </div>
     <br/>
     {/* {console.log(currentUser)} */}
     <div className='div2'>
      {
        isModalOpen
          ?
          <>
            <div className="modal">
              {/* {currentUser}  */}
             <MapContainer center={currentUser.address.geo} zoom={2} scrollWheelZoom={false}>
               <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
           <Marker icon={DefaultIcon} position={currentUser.address.geo}>
         </Marker>
        </MapContainer>
          <Link className='read' to={`/Profile/${currentUser.id}`} >read more</Link>

        </div>
            <div className='backdrup' onClick={colseModal}> true </div>
          </>
          :
          null
      }
      {
        users
        .filter(user => user.name.includes(inputValue))
        .map(user => {
          return (
            <div  onClick={() => {openModal(user)}} className='container'>
              <img className='imgall' src={`https://robohash.org/${user.id}?set=set2&size=200x200`} />
              {}
              <h3 className='h3box'> {user.name} </h3>
              <h4 className='h4box'> {user.email} </h4>
            </div>
          )
        })
      }
    </div>
    
  </div> 
  );
}

export default App;
