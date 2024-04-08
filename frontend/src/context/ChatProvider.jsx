import { createContext, useContext } from 'react'

const ChatContext = createContext()

const ChatProvider = ({children}) => {
    return (
        <ChatContext.Provider value={{}}>
            {children}
        </ChatContext.Provider>
    )
}

export const ChatState = () => {
    return useContext(ChatContext)
}

export default ChatProvider