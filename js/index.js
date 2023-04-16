let my_name = "Wilratier Ochoa";
let name_place = document.getElementById("my_name");
let bar = document.getElementById("bar");

function put(i) {
    
}

function insert_my_name() {
    

    if (i < my_name.length){
        setTimeout(timer => {
            console.log(i);
            name_place.textContent += my_name[i];
            i++;
            insert_my_name();
        }, 120);
    }
    else{
        setTimeout(dissapear_bar =>{
            bar.style.display = "none";
        }, 600)
    }

}

let i = 0;
insert_my_name()
