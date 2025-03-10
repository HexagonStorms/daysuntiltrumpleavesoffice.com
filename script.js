document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to
    const endDate = new Date("Jan 20, 2029 12:00:00").getTime();
    
    // Elements
    const countdownElement = document.getElementById("countdown");
    const millisecondsElement = document.getElementById("milliseconds");
    
    // Update the countdown every 10 milliseconds
    const countdown = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Find the time remaining between now and the countdown end date
        const timeRemaining = endDate - now;
        
        // Time calculations for days, hours, minutes, seconds and milliseconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((timeRemaining % 1000));
        
        // Format milliseconds to always be 3 digits
        const formattedMilliseconds = milliseconds.toString().padStart(3, '0');
        
        // Display the results
        countdownElement.innerHTML = `${days} : ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
        millisecondsElement.innerHTML = formattedMilliseconds;
        
        // If the countdown is over, display a message
        if (timeRemaining < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "0 : 00 : 00 : 00";
            millisecondsElement.innerHTML = "000";
            document.querySelector('.title').innerHTML = "Trump Has Left Office";
        }
    }, 10); // Update every 10ms for smooth millisecond display
    
    // Add animation effect when page loads
    setTimeout(function() {
        countdownElement.style.opacity = "1";
        millisecondsElement.style.opacity = "1";
    }, 300);
});