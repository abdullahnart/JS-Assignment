function eidMubarak() {
    let wrapper = document.querySelector("#wrapper");

    function updateCountdown() {
        let eidDate = new Date("June 17 2024");
        let currentDate = new Date();
        let calculation = eidDate - currentDate;

        let seconds = calculation / 1000;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;

        let remainingHours = hours % 24;
        let remainingMinutes = minutes % 60;
        let remainingSeconds = seconds % 60;

        if (Math.floor(days) === 0 && Math.floor(remainingHours) === 0 && Math.floor(remainingMinutes) === 0 && Math.floor(remainingSeconds) === 0) {
            wrapper.innerHTML = `<b>Eid<span>-ul-</span>Adha<span><br>Mubarak</span></b>`;
        } else {
            wrapper.innerHTML = `<b>${Math.floor(days)} Days ${Math.floor(remainingHours)} Hours ${Math.floor(remainingMinutes)} Minutes ${Math.floor(remainingSeconds)} Seconds <br> Remaining in Eid Edha 2024</b>`;
        }
    }

    // Initial call to update the countdown
    updateCountdown();

    // Set interval to update countdown every second
    setInterval(updateCountdown, 1000);
}

// Call the function to start the countdown
eidMubarak();
