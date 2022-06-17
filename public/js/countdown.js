window.addEventListener('load', () => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const eventDate = new Date('June 27, 2022 12:00:00').getTime();
    const changeDate = setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingTime = eventDate - currentTime;
        document.getElementById('days').innerText = setNumber(remainingTime / day);
        document.getElementById('hours').innerText = setNumber((remainingTime % day) / hour);
        document.getElementById('minutes').innerText = setNumber((remainingTime % hour) / minute);
        document.getElementById('seconds').innerText = setNumber((remainingTime % minute) / second);

        if (remainingTime < 0) {
            //code which will execute once the date is reached
            clearInterval(changeDate);
        }
    }, 1000);

    function setNumber(num) {
        const result = Math.floor(num);
        return result >= 10 ? result : `0${result}`;
    }
});
