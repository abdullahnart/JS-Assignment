function eidMubarak(){
    let wrapper = document.querySelector("#wrapper");
    let eidDate = new Date();
    let currentDate = new Date ();
    let calculation = eidDate-currentDate;
    let second = calculation / 1000;
    let minutes = second / 60;
    let hours = minutes / 60;
    let day = hours / 24;
    if (day === 0 && hours === 0 && minutes === 0 && second === 0){
        wrapper.innerHTML = `<b>Eid<span>-ul-</span>Adha<span><br>Mubarak</span></b>`
    }else{
        wrapper.innerHTML = `<h1>${Math.floor(day)} Days Remaining in Eid Edha 2024</h1>`
    }
}
eidMubarak();