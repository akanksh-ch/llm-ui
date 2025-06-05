import { useEffect, useState } from "react"
import Messages from "./Messages";

export default function() {
    const [messages, setMessages] = useState([]);
    
    
  useEffect(() => {
    setMessages([
      { role: "user", content: "Why is the sky blue?" },
      {
        role: "assistant",
        content:
          "The sky appears blue due to Rayleigh scattering of sunlight.",
      },
    ]);
  }, []);
  
    return(<>
        <Messages messages={messages}/>
    </>)
}