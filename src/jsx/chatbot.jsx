import { useEffect } from "react";

const ChatbitEmbed = () => {
  useEffect(() => {
    window.cbConfig = {
      chatId: "d825500c-61b3-4132-b1c5-a7d2543f7945"
    };

    const script = document.createElement("script");
    script.src = "https://app.chatbit.co/embed.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div></div>
  );
};

export default ChatbitEmbed;