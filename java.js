const buttonId=document.getElementById("yes")
const body=document.querySelector('body')
let mySound1 = new Audio('Yes.m4a')
const fun=buttonId.addEventListener("click",function(e){
    if (this.click) {
        body.innerHTML="Love you 💋"
        body.style.color='Violet'
        body.style.textAlign='center'
        body.style.marginTop='25%'
        body.style.fontSize='90px'
        body.style.backgroundColor='pink'
        body.style.backgroundImage="url(pic11.png)"
        mySound1.play()
    }
})

let mySound = new Audio('No.m4a')
const buttonId2=document.getElementById("NO")
const buttit=document.getElementById("hellos")
const body2=document.querySelector('body')
const fun2=buttonId2.addEventListener("click",function(e){
    if (this.click) {
        Nos()
    }
})
function Nos() {
    let  a=(Math.floor(Math.random()*10+1))
        console.log(a);
        switch (a) {
            case 1:
            buttit.innerHTML='Are you sure?'
            body.style.backgroundImage="url(pic1.png)"
            mySound.play()
            break;
            case 2:
            buttit.innerHTML='Think again🥹'
            body.style.backgroundImage="url(pic2.png)"
            mySound.play()
            break;
            case 3:
            buttit.innerHTML='You will regret it '
            body.style.backgroundImage="url(pic3.png)"
            mySound.play()
            break;
            case 4:
            buttit.innerHTML='Think Once more'
            body.style.backgroundImage="url(pic4.png)"
            mySound.play()
            break;
            case 5:
            buttit.innerHTML='Dont break my Heart❤️'
            body.style.backgroundImage="url(pic5.png)"
            mySound.play()
            break;
            case 6:
            buttit.innerHTML='You are the One'
            body.style.backgroundImage="url(pic6.png)"
            mySound.play()
            break;
            case 7:
            buttit.innerHTML='Please Dont say that'
            body.style.backgroundImage="url(pic7.png)"
            mySound.play()
            break;
            case 8:
            buttit.innerHTML='You are only the only one for me'
            body.style.backgroundImage="url(pic8.png)"
            mySound.play()
            break;
            case 9:
            buttit.innerHTML='Dont Leave me'
            body.style.backgroundImage="url(pic9.png)"
            mySound.play()
            break;
            case 10:
            buttit.innerHTML='Your rejection Breaks my heart'
            body.style.backgroundImage="url(pic10.png)"
            mySound.play()
                break;
        
            default: buttit.innerHTML='NOOOOO'
                break;
        }
     
}


