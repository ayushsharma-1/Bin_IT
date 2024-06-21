import { Navigate } from "react-router-dom";

const { createContext, useContext, useState, useEffect, } = require("react");

const ChatContext=createContext();
const ChatProvider=({children})=>{
    const [user,setUser]=useState();

    useEffect(()=>{
       const userInfo=JSON.parse(localStorage.getItem('userInfo'));
       setUser(userInfo);
       if(!userInfo){
        Navigate('/login');
       }
    },[])
    return(
    <ChatContext.Provider value={{user,setUser}}>
        {children}
    </ChatContext.Provider>
    )
}
export const ChatState=()=>{
   return useContext(ChatContext)
}
export default ChatProvider