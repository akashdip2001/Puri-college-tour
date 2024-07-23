const countdown = () => {
    const countDate = new Date('August 26, 2024 20:40:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = textDay;
    document.getElementById('hours').innerText = textHour;
    document.getElementById('minutes').innerText = textMinute;
    document.getElementById('seconds').innerText = textSecond;
};

setInterval(countdown, 1000);


/* UPI payment */
        function payWithUPI() {
            const upiID = "soumyadeepkoley1301@oksbi";
            const amount = prompt("Bal কত টাকা দিবি দে, আর ফেরত পাওয়ার আশায় থাকিস না, মুর্খ --> amount টা enter কর মুর্খ:");
            if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
                const upiLink = `upi://pay?pa=${upiID}&pn=Soumyadeep%20Koley&am=${amount}&cu=INR`;
                window.location.href = upiLink;
            } else {
                alert("Please enter a valid amount.");
            }
        }
    
