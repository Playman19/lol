let cont = document.getElementsByClassName('content')[0];
let arr = [0,1,2,3,4,5,6,7,8,9,'d','f']
const cv = () => {
    const lol = () => {
        return arr[Math.floor(Math.random()*10)]
    }
    return `#${lol()}${lol()}${lol()}${lol()}${lol()}${lol()}`
} 
    
setInterval(()=>{
    cont.style.backgroundColor = cv()
},1000)