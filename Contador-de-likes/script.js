var counterVal = 0;

function clicar() {
    updateDisplay(++counterVal);
}

function updateDisplay(val) {
    document.getElementById("numero").innerHTML = val;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ondas = document.createElement('span');
        ondas.style.left = x + 'px';
        ondas.style.top = y + 'px';
        this.appendChild(ondas);

        setTimeout(() => {
            ondas.remove()
        },1000)
    })
})
