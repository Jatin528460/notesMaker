let textBox = document.getElementById("textarea");

let articleNote = document.getElementById("articleNote")
let i = 0,j = 0,k =0;
let ele1,ele2,ele3;
let biggestHeight = 0;
let tosearch = [];

let addNote = document.getElementById("addNoteButton");
let textBoxData;

let notes = document.getElementById("notes");
let box , boxHead , boxPara , boxDelete , boxHeadData , boxParaData , boxDeleteData;
let home = document.getElementById("leftHeaderHome");
let search = document.getElementById('rightHeaderSearch');
let input = document.getElementById('inputid');
let inputvalue;


let z = 1;
// while(localStorage !== null){
//     textBox.value = localStorage.getItem(`Note ${z}`);
//     funAddNote();
//     localStorage.removeItem(`Note ${z}`);
//     z++;
// }
while(localStorage.getItem(`Note ${z}`) != null){
    textBox.value = localStorage.getItem(`Note ${z}`);
    funAddNote();
    z++;
}
home.addEventListener("click", funHome);
function funHome() {
  window.open("Notes.html", "_self");
}

addNote.addEventListener("click", funAddNote);
function funAddNote() { 
    articleNote.style.display = 'none';
  textBoxData = textBox.value;
  if (textBoxData !== "") {
    i++; 
    funCreate();
  }
}

function funCreate() {  
  box = document.createElement("div");
  box.className = "createdBox";
  box.id = "createdBox" + i;
  boxHead = document.createElement("h3");
  boxHead.id = 'boxHeadid'+i;
  k = i;
  boxPara = document.createElement("p");
  boxPara.id = 'boxParaid'+i;
  boxDelete = document.createElement("button");
  boxDelete.setAttribute('onclick',`funDelete(${k})`)
  boxDelete.id = i;
  boxHeadData = document.createTextNode("Note " + i);
  boxParaData = document.createTextNode(textBoxData);
  boxDeleteData = document.createTextNode("Delete Node");

  boxHead.appendChild(boxHeadData);
  boxPara.appendChild(boxParaData);
  boxDelete.appendChild(boxDeleteData);
  box.appendChild(boxHead);
  box.appendChild(boxPara);
  box.appendChild(boxDelete);
  notes.appendChild(box);
  textBox.value = ""; 

  localStorage.setItem(`Note ${i}`,textBoxData);
  tosearch.push(textBoxData);
//   j++;
//   if(j === 3){
//       funAddMargin();
//   }
}

// function funAddMargin(){
//     ele3 = document.getElementById('createdBox'+i);
//     i -= 1;
//     ele2 = document.getElementById('createdBox'+i);
//     i -= 1;
//     ele1 = document.getElementById('createdBox'+i);

//     if(ele1.offsetHeight > ele2.offsetHeight){
//         if(ele1.offsetHeight > ele3.offsetHeight){
//             biggestHeight = ele1.offsetHeight;
//         }
//         else{
//             biggestHeight = ele3.offsetHeight;
//         }
//     }
//     else if(ele2.offsetHeight > ele3.offsetHeight){
//             biggestHeight = ele2.offsetHeight;
//     }
//     else if(ele3.offsetHeight > ele2.offsetHeight){
//             biggestHeight = ele3.offsetHeight;
//     }

//     if(biggestHeight !== 0){
//         if(biggestHeight === ele1.offsetHeight){
//             ele2.style.marginBottom = (biggestHeight - ele2.offsetHeight)+(16.1875)+"px";
//             ele3.style.marginBottom = (biggestHeight - ele3.offsetHeight)+(16.1875)+"px";
//             console.log(biggestHeight - ele2.offsetHeight)
//         }
//         else if(biggestHeight === ele2.offsetHeight){
//             ele1.style.marginBottom = biggestHeight - ele1.offsetHeight+(16.1875)+"px";
//             ele3.style.marginBottom = biggestHeight - ele3.offsetHeight+(16.1875)+"px";
//         } 
//         else if(biggestHeight === ele3.offsetHeight){
//             ele1.style.marginBottom = biggestHeight - ele1.offsetHeight+(16.1875)+"px";
//             ele2.style.marginBottom = biggestHeight - ele2.offsetHeight+(16.1875)+"px";
//         } 
//     }
//     j = 0;
//     i += 2;
//     biggestHeight = 0;
// }

function funDelete(k){ 
    // notes.removeChild(document.getElementById('createdBox'+k));
    for(let l = k; l < i; l++){
    (document.getElementById('boxParaid'+l)).innerText = (document.getElementById('boxParaid'+(l+1)).innerText);
    localStorage.setItem(`Note ${l}`,localStorage.getItem(`Note ${(l+1)}`));
    }
    localStorage.removeItem(`Note ${i}`);
    notes.removeChild(document.getElementById('createdBox'+i));
    i--;
    // for(let l = k; l <= i; l++){
    //     document.getElementById(`boxHeadid${l-1}`).innerHTML = "Note " + l;
    // }
    tosearch.splice(k-1,1);
}

search.addEventListener('click',funSearch);
function funSearch(){
    inputvalue = input.value;
    for(let l = 0; l < i; l++){
        document.getElementById('createdBox'+(l+1)).style.display = 'none';
        if(tosearch[l].includes(inputvalue)){
            document.getElementById('createdBox'+(l+1)).style.display = 'block'
            console.log(l);
        }
    }
//     if(tosearch.includes(inputvalue)){
// console.log(tosearch);
//     }
}
