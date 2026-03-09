


let allIssues=[];


const AllButton=document.getElementById("all-btn");
const OpenButton=document.getElementById("open-btn")
const closedButton= document.getElementById("closed-btn")
  const Container = document.getElementById('card-container');

  const Spinner=document.getElementById('Spinner');
const IssueCount=document.getElementById("issues-count")
const SearchText=document.getElementById('search-input')
const SearchBtn=document.getElementById('search-btn')

const ManageSpinner=(status)=>{
    if(status){
        Spinner.classList.remove('hidden');
        Container.classList.add('hidden');
    }
    else{
Spinner.classList.add('hidden')
        Container.classList.remove('hidden')
    }
}

function LoadAllIssues(){
    ManageSpinner(true)
fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then((res)=>res.json())
.then((json)=>{
    allIssues=(json.data)
    DisplayAllCards(json.data)
    UpdateCount(allIssues)
})
};


function DisplayAllCards(issues){
  Container.innerHTML=""

    issues.forEach(issue => {
        const card = document.createElement('div');
        let Color;
        if(issue.priority.toLowerCase()==='high'){
            Color='text-[#EF4444] bg-[#FEECEC]'
        }
        else if(issue.priority.toLowerCase()==='medium'){
            Color='bg-[#FFF6D1] text-[#F59E0B]'
        }
        else{
            Color='text-[#9CA3AF] bg-[#EEEFF2]'
        }
        card.innerHTML = `
        <div class="card border-t-5 w-full h-full shadow-sm ${issue.status === 'open' ? 'border-green-600' : 'border-purple-600'} p-4 space-y-3">

           
            <div class="flex justify-between items-center">
                <img src="${issue.status === 'open' ? 'assets/Open-Status.png' : 'assets/Closed- Status .png'}" alt="${issue.status} status" class="w-5 h-5">
                <div class="btn rounded-[100px] ${Color} p-2 text-[12px] font-medium w-[80px] text-center">
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
    ManageSpinner(false)
}



function UpdateCount(arr){
    IssueCount.innerText=arr.length;
}

function Toggle(id){
AllButton.classList.remove('btn-primary')
OpenButton.classList.remove('btn-primary')
closedButton.classList.remove('btn-primary')
document.getElementById(id).classList.add('btn-primary');
if(id==="all-btn"){
  DisplayAllCards(allIssues);
  UpdateCount(allIssues);
}
else if(id==='closed-btn'){
    const closedIssues=allIssues.filter(issue=>issue.status==='closed')
    DisplayAllCards(closedIssues);
    UpdateCount(closedIssues);
}
else{
    const openIssues=allIssues.filter(issue=>issue.status==='open')
DisplayAllCards(openIssues)
UpdateCount(openIssues);
}
}

document.addEventListener("DOMContentLoaded", () => {
  LoadAllIssues();
  Toggle('all-btn');
});

SearchBtn.addEventListener("click",()=>{
  
        const value=SearchText.value.trim().toLowerCase();
        Search(value)
    
})
const Search=(value)=>{

   const FilterIssues=allIssues.filter(issue=>issue.title.toLowerCase().includes(value)
||issue.description.toLowerCase().includes(value));
  DisplayAllCards(FilterIssues)
  UpdateCount(FilterIssues)

}
