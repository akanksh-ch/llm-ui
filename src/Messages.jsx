export default function Messages({messages}) {
    console.log("Rendering messages:", messages);

    const messagesItems = messages.map((message, index) => (
        <p key={index} style={{alignSelf: message.role == 'user' ? 'flex-end' : 'flex-start'}}>{message.content}</p>
    ))
    
    return (<>
        <div style={{display:'flex', flexDirection:'column'}}>{messagesItems}</div>
    </>)
}