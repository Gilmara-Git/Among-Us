function showOthers(event){
    
    
    
    let player = document.getElementByClassName('player-master')
    player.style.visibility = 'none';

   
    
    // const di = document.createElement('div')     
    // div.setAttribute("class","player")
    // div.setAttribute("class","legs")
    // div.setAttribute("class","back")
    // div.setAttribute("class","glass")
    // div.setAttribute("class","shadow")  
    // div.style.margin = '400px'; 
    


}

function produceColors(){
    let letters= '0123456789ABCDEF'
    let colors= '#' 
    colors += letters[Math.floor(Math.random() * 16)]
    return colors+'0BA57'

}

const colorPallet = produceColors()
console.log(colorPallet)