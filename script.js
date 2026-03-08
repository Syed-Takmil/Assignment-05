


let allIssues=[];


const AllButton=document.getElementById("all-btn");
const OpenButton=document.getElementById("open-btn")
const closedButton= document.getElementById("closed-btn")
  const Container = document.getElementById('card-container');


function LoadAllIssues(){
fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then((res)=>res.json())
.then((json)=>{
    allIssues.push(json)
    DisplayAllCards(json.data)
})
};
// Filter
const openIssues=allIssues.filter(issue=>issue.status==='open')
const closedIssue=allIssues.filter(issue=>issue.status==='closed')

function DisplayAllCards(issues){
  Container.innerHTML=""

    issues.forEach(issue => {
        const card = document.createElement('div');
        
        card.innerHTML = `
        <div class="card border-t-5 w-full h-full shadow-sm ${issue.status === 'open' ? 'border-green-600' : 'border-purple-600'} p-4 space-y-3">

           
            <div class="flex justify-between items-center">
                <img src="${issue.status === 'open' ? 'assets/Open-Status.png' : 'assets/Closed- Status .png'}" alt="${issue.status} status" class="w-5 h-5">
                <div class="btn rounded-[100px] text-[#EF4444] bg-[#FEECEC] p-2 text-[12px] font-medium w-[80px] text-center">
                    ${issue.priority.toUpperCase()}
                </div>
            </div>

            <h2 class="text-[14px] font-semibold">${issue.title}</h2>
            <p class="text-[12px] text-[#64748B]">${issue.description}</p>

   <div class="labels flex flex-wrap gap-2 pb-2 border-b-2 border-gray-300">
                ${issue.labels.map(label => `
                    <div class="btn rounded-full flex items-center gap-1 px-2 py-1 text-[12px] font-medium
                        ${label.toLowerCase() === 'bug' 
                            ? 'bg-[#FEECEC] text-[#EF4444]' 
                            : 'bg-[#FFF8DB] text-[#D97706]'}">
                        ${label.toLowerCase() === 'bug' 
                            ? '<i class="fa-solid fa-bug"></i>' 
                            : '<img src="assets/Vector.png" class="w-3 h-3" alt="label icon"/>'}
                        ${label.toUpperCase()}
                    </div>
                `).join('')}
            </div>

    
            <div class=" text-[#64748B] text-[12px] mt-2">
                <div>#${issue.id} by ${issue.author}</div>
                
            </div>
            <div class="date text-[#64748B] text-[12px]">${issue.createdAt.slice(0,10)}</div>

        </div>
        `;

        Container.append(card);
    });
}

function Toggle(id){
AllButton.classList.remove('btn-primary')
OpenButton.classList.remove('btn-primary')
closedButton.classList.remove('btn-primary')
document.getElementById(id).classList.add('btn-primary');
if(id="all-btn"){
   LoadAllIssues();
}
else if(id='closed-btn'){
    DisplayAllCards(openIssues);
}
else{
DisplayAllCards(closedIssue)
}
}

Toggle('all-btn')