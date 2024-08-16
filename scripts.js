function generatePictographic() {
    const type = document.getElementById('pictType').value;
    const count = parseInt(document.getElementById('pictCount').value);
    const output = document.getElementById('pictOutput');
    output.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        let figure = document.createElement('div');
        figure.className = 'pict-figure';

        switch (type) {
            case 'rotate':
                figure.style.transform = `rotate(${i * 20}deg)`;
                break;
            case 'size':
                figure.style.width = `${20 + i * 10}px`;
                figure.style.height = `${20 + i * 10}px`;
                break;
            case 'color':
                figure.style.backgroundColor = `hsl(${i * 36}, 100%, 70%)`;
                break;
            case 'fractal':
                figure = document.createElement('div');
                figure.className = 'fractal-container';
                let fractalContent = document.createElement('div');
                fractalContent.className = 'fractal-content';
                fractalContent.style.fontSize = `${10 + i * 5}px`;
                fractalContent.innerHTML = '▲'.repeat(i);
                figure.appendChild(fractalContent);
                break;
        }
        
        output.appendChild(figure);
    }
}


function generateArithmetic() {
    const firstTerm = parseInt(document.getElementById('aritFirstTerm').value);
    const difference = parseInt(document.getElementById('aritDifference').value);
    const terms = parseInt(document.getElementById('aritTerms').value);
    const output = document.getElementById('aritOutput');
    output.innerHTML = '';

    let sequence = '';
    for (let i = 0; i < terms; i++) {
        sequence += firstTerm + (i * difference) + ' ';
    }
    output.textContent = sequence.trim();
}

function generateNumeric() {
    const type = document.getElementById('numType').value;
    const terms = parseInt(document.getElementById('numTerms').value);
    const output = document.getElementById('numOutput');
    output.innerHTML = '';

    let sequence = '';
    switch (type) {
        case 'fibonacci':
            let a = 0, b = 1, temp;
            for (let i = 0; i < terms; i++) {
                sequence += a + ' ';
                temp = a + b;
                a = b;
                b = temp;
            }
            break;
        case 'geometric':
            let firstTerm = 1;
            let ratio = 2; // Example ratio
            for (let i = 0; i < terms; i++) {
                sequence += firstTerm + ' ';
                firstTerm *= ratio;
            }
            break;
        case 'custom':
            // Custom logic could be added here
            for (let i = 0; i < terms; i++) {
                sequence += i * i + ' '; // Example: squares of the index
            }
            break;
    }
    output.textContent = sequence.trim();
}
