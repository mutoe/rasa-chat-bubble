import './index.scss'

import { Bubbles } from './Bubbles'
import { createDom } from './node'

declare global {
  interface Window {
    chatWindow: any
  }
}

const ajContainer = createDom('div', { class: 'ask-jamie-container' })
const bubbleContainer = createDom('div', { id: 'chat' })
const chatButton = createDom('button', { class: 'chat-button', text: 'Ask Jamie' })
chatButton.addEventListener('click', () => {
  bubbleContainer.classList.toggle('active')
})
chatButton.addEventListener('click', () => {
  chatWindow.talk(convo)
}, { once: true })
ajContainer.appendChild(chatButton)
ajContainer.appendChild(bubbleContainer)
document.body.appendChild(ajContainer)

const chatWindow = new Bubbles(bubbleContainer, 'chatWindow', {
   inputCallbackFn (o: any) {
     console.log(o)
    chatWindow.reply({says: ['test reply']})
  },
})

interface Convo {
  [key: string] : {
    says?: string[]
    reply?: {
      question: string
      answer: string
    }[]
  }
}

const convo: Convo = {
  ice: {
    says: [ 'Hi, I\'m Jamie.', 'What can I help you?' ],
  },
}

window.chatWindow = chatWindow


