import NavBar from "./components/SideNavbar";
import Chat from "./components/Chat";
import Group from "./components/Group";
import './community.css';
import io from 'socket.io-client';
const Community=()=>{
    const domain = process.env.REACT_APP_DOMAIN;
    const socket=io(`${domain}`);
    socket.on('message',(msg)=>{
        console.log(msg);
    })
    return (
        
    <div className="community">
     <NavBar className="navbar"/> 
     <Group className="group"/>
     <Chat className="chat"/>
    </div>
)};

export default Community;