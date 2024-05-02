window.onload = () => {
    const jumper = document.getElementById('jumper');
    const container = document.querySelector('.letter-container');

    jumper.addEventListener('animationend', () => {
        console.log('Jumper has finished the jump.');
        container.style.animation = 'moveViewDown 1s forwards';
    });
};
