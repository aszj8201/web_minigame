const game1 = document.getElementById("game1")
const game2 = document.getElementById("game2")
const game3 = document.getElementById("game3")

const btns = document.querySelectorAll(".gamebutton");
const text = document.querySelectorAll(".p_tag");
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("mouseover", (e)=>{
        text[i].style.display = "block"
    });

    btns[i].addEventListener("mouseout", (e)=>{
        text[i].style.display = "none"
    });
}

// addEventListener("이벤트 타입", 이벤트 리스너, [true, false]);
// 이벤트 타입: on 접두사 x
// 이벤트리스너 호출 시 함수명

// p_tag.addEventListener("mouseover", over);

// function over(){
//   p_tag.style.backgroundColor = "orchid";
// }

// p_tag.addEventListener("mouseout", ()=>{
//   p_tag.style.backgroundColor = "white";
// });