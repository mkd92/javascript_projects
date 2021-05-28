const btn = document.getElementById('btn');

const color = document.getElementById("color");

const colors= ["red", "green", "rgba(133,122,200)"]
btn.addEventListener('click', function(){
    // console.log("clicked");
    const randomNumber = get_random_number(colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function get_random_number(x){
    return Math.floor( Math.random()*x);
}