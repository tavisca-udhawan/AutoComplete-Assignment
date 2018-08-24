var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
names.sort();
var focus;
var count = 0,indexer1=0;
var data = document.getElementById("input-box");
function removeList() {
    var x = document.getElementsByClassName("list");
    for (var i = 0; i < x.length; i++) {
        x[i].parentNode.removeChild(x[i]);
    }
}
function editField() {
    document.getElementById("input-box").value = null;
    document.getElementById("cross").style.visibility = "Hidden";
    removeList();
}
function autoComplete(e) {
    var ll = document.getElementById("listId");
    if (e.keyCode == 13) {
        e.preventDefault();
        if (indexer1 >=0) {
            if (ll)
                ll.childNodes[indexer1].click();
        }
        removeList();
    }
    else if (e.keyCode == 38) {
        ll.childNodes[focus].setAttribute("class", "div");
        focus--;
        if (focus <= 0)
            focus = 0;
        ll.childNodes[focus].setAttribute("class", "focussing");
        indexer1=focus;
        document.getElementById("listId").childNodes[focus].scrollIntoView(false);
    }
    else if (e.keyCode == 40) {
        ll.childNodes[focus].setAttribute("class", "focussing");
        if (focus >= 1) {
            ll.childNodes[focus - 1].setAttribute("class", "div");
        }
        indexer1=focus;
        focus++;
        if (focus >= count)
            focus = count - 1;
        document.getElementById("listId").childNodes[focus].scrollIntoView(false);
    }
    else {
        var elements, index;
        var list_data;
        focus = 0;
        var alpha_check;
        count = 0;
        var flag = 0, indexer = 0;
         data = document.getElementById("input-box");
        removeList();
        document.getElementById("cross").style.visibility = "Visible";
        elements = document.createElement("DIV");
        elements.setAttribute("class", "list");
        elements.setAttribute("id", "listId");
        data.parentNode.appendChild(elements);
        elements.style.textAlign = "center";
        elements.style.backgroundColor = "white";
        if (data.value.length > 0) {
            for (index = 0; index < names.length; index++) {
                for (alpha_check = 0; alpha_check < names[index].length; alpha_check++) {
                    if (names[index].substr(alpha_check, data.value.length).toUpperCase() == data.value.toUpperCase()) {
                        list_data = document.createElement("DIV");
                        list_data.style.border = "1px solid black";
                        list_data.innerHTML += names[index].substr(0, alpha_check);
                        list_data.innerHTML += "<strong>" + names[index].substr(alpha_check, data.value.length) + "</strong>";
                        list_data.innerHTML += names[index].substr(alpha_check + data.value.length, names[index].length);
                        list_data.innerHTML += "<input type='hidden' value='" + names[index] + "'>";
                        list_data.addEventListener("click", function (e) {
                            data.value = this.getElementsByTagName("input")[0].value;
                            removeList();
                        });
                        elements.appendChild(list_data);
                        count += 1;
                        flag = 1;
                        break;
                   }

                }
           }
        }
        if (data.value.length == 0) {
            document.getElementById("cross").style.visibility = "Hidden";
            removeList();
        }
        else if (flag == 0) {
            list_data = document.createElement("DIV");
            list_data.style.border = "1px solid black";
            list_data.innerHTML = "No Data Found";
            elements.appendChild(list_data);
        }
    }
}