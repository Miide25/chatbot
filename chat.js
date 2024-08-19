const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('btn');
const chatLog = document.getElementById('chat-log');

let chatbotResponses = {
	'hello': 'Hi! How can I help you?',
	'hi': 'Hello! What\'s up?',
	'how are you': 'I\'m good, thanks!',
	'who made you': 'The genius behind my creation is a front-end developer who goes by the nickname Mide. His real name is Oni olaoluwa',
    'who are you': 'I\'m a chatbot.',
    'How are you': 'I\'m good, thanks',
    'what\'s up': 'Nothing much! just waiting for your question',
    'what\'s your name': 'MY name is Chatbot. And what can i help you withm.',
    'tell me a joke': 'why did the developer quit his job? Because he didn\'t get arrays!',
    'can you tell me a fun fact': 'Did you know that the first computer bug was an actual insect that got stuck in the Harvard Mark 2 computer in 1947?',
    'bye': 'Goodbye, it was nice chatting with you',
    'goodbye': 'Have a great day ahead and feel free to come back',
	'default': 'Sorry, I didn\'t understand that.'
};

sendBtn.addEventListener('click', () => {
	let userText = userInput.value.toLowerCase();
	let response = chatbotResponses[userText] || chatbotResponses['default'];

	chatLog.innerHTML += `<p>You: ${userText}</p>`;
	chatLog.innerHTML += `<p>Chatbot: ${response}</p>`;
	userInput.value = '';


});