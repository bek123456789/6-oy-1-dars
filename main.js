let p = document.querySelector('.p_p')


const ReadUsers = () => {
    
let count = new Date()

let second = count.getSeconds()
let minuts = count.getMinutes()
let hours = count.getHours()
p.innerHTML = `${hours}:${minuts}:${second}`
}


setInterval(() => {
    ReadUsers()
}, 1000)



