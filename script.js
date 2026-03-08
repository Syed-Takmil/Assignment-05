




const AllButton=document.getElementById("all-btn");
const OpenButton=document.getElementById("open-btn")
const closedButton= document.getElementById("closed-btn")

function Toggle(id){
AllButton.classList.remove('btn-primary')
OpenButton.classList.remove('btn-primary')
closedButton.classList.remove('btn-primary')
document.getElementById(id).classList.add('btn-primary');
}