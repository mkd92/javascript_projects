const btn = document.getElementById('btn');

const color = document.getElementById("color");

btn.addEventListener('click', function(){
    // console.log("clicked");
    const randomColor = get_random_number();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
})

const get_random_number=()=>{
let n = (Math.random() * 0xfffff * 1000000).toString(16);
return '#' + n.slice(0,6);

}