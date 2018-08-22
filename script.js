var names= ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
names.sort();
function removeList(){
    var x = document.getElementsByClassName("list");
    for (var i = 0; i < x.length; i++) {
           x[i].parentNode.removeChild(x[i]);
    }
}
function autoComplete(){
    var elements,index;
    var list_data,count=0;
    var alpha_check;
    var flag=0,indexer=0;
    var data=document.getElementById("input-box");
    removeList();
    if(data==null){
        removeList();
    }
    elements=document.createElement("DIV");
    elements.setAttribute("class","list");
    data.parentNode.appendChild(elements);
    elements.style.textAlign="center";
    elements.style.backgroundColor="white";
    if(data.value.length>0 ){
        for(index=0;index<names.length;index++){
            for(alpha_check=0;alpha_check<names[index].length;alpha_check++){
                  if(names[index].substr(alpha_check,data.value.length).toUpperCase()==data.value.toUpperCase() && indexer<=1){
                     list_data=document.createElement("DIV");
                     list_data.style.border="1px solid black";
                     list_data.innerHTML+=names[index].substr(0,alpha_check);
                     list_data.innerHTML+="<strong>"+names[index].substr(alpha_check,data.value.length)+"</strong>";
                     list_data.innerHTML+=names[index].substr(alpha_check+data.value.length,names[index].length);
                     list_data.innerHTML+="<input type='hidden' value='"+names[index]+"'>";
                     elements.addEventListener("click",function(e){
                     data.value=this.getElementsByTagName("input")[0].value;
                     indexer+=1;
                     removeList();
                     });
                     count++;
                     if(count<=10) {
                     elements.appendChild(list_data);
                     flag=1;
                     break;   
                     }
                }
            }
        }   
    }
    if(data.value.length==0){
       removeList();
    } 
    else if(flag==0){
      list_data=document.createElement("DIV");
      list_data.style.border="1px solid black";
      list_data.innerHTML="No Data Found";
      elements.appendChild(list_data);
    }
}
      
