function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === 'Enter') {
            appendToDisplay(key === 'Enter' ? '=' : key);
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });
});