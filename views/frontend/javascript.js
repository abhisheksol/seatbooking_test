const container=document.querySelector(".container")
const countseat=document.getElementById("count")
const tp=document.getElementById("movie_name")
let total1=+tp.value

function updatecount(){
    const togglecount=document.querySelectorAll(".seat.Selected")
    
    const toarry=togglecount.length-1;
    countseat.innerHTML=toarry
    console.log(toarry*total1);
    total.innerHTML=toarry*total1

}
 
movie_name.addEventListener("change",(e)=>{
    total1=e.target.value
    updatecount()
})

container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("seat")&&!e.target.classList.contains("booked"))
    {
        e.target.classList.toggle("Selected")
    }
    
    updatecount()
})















// const container = document.querySelector(".container");
// // const seats = document.querySelectorAll(".row.seat:not(.booked)");
// const count = document.getElementById("count");
// const total1 = document.getElementById("movie_name");
// let price = +total1.value;

// function update_price_count() {
//     const selected_seat_count = document.querySelectorAll(".seat.Selected");
//     const selected_to_arr = Array.from(selected_seat_count);
//     count.innerHTML = selected_to_arr.length-1;
//     console.log(price);
//     total.innerHTML = (selected_to_arr.length - 1) * price;
// }

// total1.addEventListener('change', (e) => {
//     price = +e.target.value; // Update the global 'price' variable without 'const'
//     update_price_count();
// });

// container.addEventListener('click', (e) => {
//     if (e.target.classList.contains("seat") && !e.target.classList.contains("booked")) {
//         e.target.classList.toggle("Selected");
//     }
//     update_price_count();
// });

