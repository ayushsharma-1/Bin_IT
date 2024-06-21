// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ChatContext = createContext();

// const ChatProvider = ({ children }) => {
//   const [selectedChat, setSelectedChat] = useState(null); // Provide initial value
//   const [notification, setNotification] = useState([]); // Provide initial value
//   const [chats, setChats] = useState([]); // Provide initial value

//   const history = useNavigate();

//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));

//     if (!userInfo) {
//       history.push("/"); // Redirect to login if user info not found
//     }

//     // setUser(userInfo); // Uncomment setUser if needed

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [history]);

//   return (
//     <ChatContext.Provider
//       value={{
//         selectedChat,
//         setSelectedChat,
//         // user,
//         // setUser,
//         notification,
//         setNotification,
//         chats,
//         setChats,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const ChatState = () => {
//   return useContext(ChatContext);
// };

// export default ChatProvider;
