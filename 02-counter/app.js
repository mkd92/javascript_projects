count = document.getElementById("count");
var x = parseInt(count.textContent);

decBtn = document.getElementById("dec");
incBtn = document.getElementById("inc");
resBtn = document.getElementById("res");

function actions(action) {
    if (action == 'inc') {
        x += 1;
    } else if (action == 'dec') {
        x -= 1;
    } else {
        x = 0;
    }
    count.textContent = x;
    if(x>0){
        count.style.color = "#1abc9c"
    }else if(x==0){
        count.style.color = "#1e2937"
    }else{
        count.style.color = "#eb6354"
    }


}

incBtn.addEventListener("click", ()=>{
    actions('inc');
});

decBtn.addEventListener("click", () => {
    actions('dec');
})
resBtn.addEventListener("click", () => {
    actions('res');
})

