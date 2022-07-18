import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Messages from "../components/Message";

const Chat = () =>{
    const [messages, setMessages] = useState([
        { from: "computer", text:"Hi, My Name is HoneyChat"},
        { from: "me", text:"Hey there"},
        { from:"me", text:"Myself Grant Ward"},
        {
            from: "computer",
            text:"Nice to meet you. You can send me message and I will reply with same message"
        },
    ]);
    const [inputMessage, setInputMessage] = useState("");

    const handleSendMessage = () =>{
        if(!inputMessage.trim().length) {
            return;
        }

        const data = inputMessage;

        setMessages((old) =>[...old,{from:"me", text:data}]);
        setInputMessage("");

        setTimeout(() => {
            setMessages((old) =>[...old,{from:"computer", text:data}])
        }, 1000);
    };

    return(
        <Flex w="100%" h="100vh" justify="center" align="center">
            <Flex w="40%" h="90%" flexDir="column">
                <Header />
                <Divider />
                <Messages messages={messages} />
                <Divider />
                <Footer
                    inputMessage={inputMessage}
                    setInputMessage={setInputMessage}
                    handleSendMessage={handleSendMessage}
                />
            </Flex>
        </Flex>
    )
}

export default Chat;