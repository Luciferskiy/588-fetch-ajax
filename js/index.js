function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
    //clock.style.backgroundColor = 'red';
    clock.classList.add('highlight');
}

setInterval(updateClock, 1000);          

//const headerNav = document.querySelector('header#home nav');
//headerNav.style.alignItems = 'center';