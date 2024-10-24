const chatSendButton = document.getElementById('chat-send-button');
const chatInput = document.getElementById('chat-input');

chatSendButton.addEventListener('click', function() {
    const userInput = chatInput.value;
    if (userInput.trim() !== "") {
        addChatMessage(userInput, 'user');  
        chatInput.value = '';  
        sendToChatGPT(userInput);  
    }
});


function addChatMessage(message, sender) {
    const chatWindow = document.getElementById('chat-window');
    const chatMessage = document.createElement('div');
    chatMessage.className = 'chat-message ' + sender;
    chatMessage.textContent = message;
    chatWindow.appendChild(chatMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;  
}


async function sendToChatGPT(message) {
  
    addChatMessage('Nebul está escribiendo...', 'bot-loading');

    try {
        const response = await fetch('http://localhost:3000/chatgpt', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })  
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor.');
        }

        const data = await response.json();
        const reply = data.choices[0].message.content;

        
        const botLoadingMessage = document.querySelector('.bot-loading');
        if (botLoadingMessage) {
            botLoadingMessage.remove();
        }

        
        addChatMessage(reply, 'bot');
    } catch (error) {
        console.error('Error al comunicarse con la API:', error);
        const botLoadingMessage = document.querySelector('.bot-loading');
        if (botLoadingMessage) {
            botLoadingMessage.remove();
        }
        addChatMessage('Error al comunicarse con el servidor.', 'bot');
    }
}
chatInput.addEventListener('input', () => {
    chatSendButton.disabled = chatInput.value.trim() === "";
});
