const btns = document.querySelectorAll(".btn");

const div_box = document.querySelectorAll(".box")[0];
const dbox_children = div_box.children;

const div_lo = document.querySelectorAll(".boxinone")[0];

const result = document.querySelectorAll(".result")[0];



btns[1].addEventListener("click", (e)=>{
    
});

btns[1].addEventListener("click", (e)=>{    
    const n = document.querySelectorAll(".n")[0];
    const n_t = document.getElementsByClassName("n")[0].innerHTML;
    
    if(n_t >= 10){
        alert(`최대 10개 까지입니다.`);
    }else{
        const input_tag = document.createElement("input");
        input_tag.type = "text"
        const input = div_lo.appendChild(input_tag);
        input.classList.add("list");

        const n_q = parseInt(n_t) + 1;
        n.innerHTML = n_q;
    }
});

btns[0].addEventListener("click", (e)=>{
    const n = document.querySelectorAll(".n")[0];
    const n_t = document.getElementsByClassName("n")[0].innerHTML;
    if(n_t == 1){
        alert("1개 이상의 값이 필요합니다");
    }else{
        
        const n_q = parseInt(n_t) - 1;

        n.innerHTML = n_q;

        div_lo.lastChild.remove("tag");
    }
});

btns[2].addEventListener("click", (e)=>{
    const result_child = result.children;
    const input_box = document.querySelectorAll(".list");   
    let random_num = Math.floor(Math.random() * input_box.length);

    if(result_child.length >= 3){
        result.firstChild.remove("tag");
    }

    for(let i = 0; i < result_child.length; i++){
        result.children[i].classList.remove("red")
    }

    let div_value = document.createElement("p");
    let div_text = document.createTextNode(`${input_box[random_num].value}`);
    div_value.appendChild(div_text);
    div_value.classList.add("red");

    result.appendChild(div_value);    
}); 

btns[3].addEventListener('click',function clear() {
    location.reload();
});



