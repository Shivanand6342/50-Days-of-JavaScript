const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message in LinkedIn',
    'XYZ liked your post',
    'Video Uploaded',
    'XYZ followed you',
    'GYM Time',
]

button.addEventListener('click', () => createNotification())

function createNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}