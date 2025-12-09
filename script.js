document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tracingForm');
    const titleInput = document.getElementById('titleInput');
    const textInput = document.getElementById('textInput');
    const outputDiv = document.getElementById('output');
    const outputTitle = document.getElementById('outputTitle');
    const outputText = document.getElementById('outputText');
    const printBtn = document.getElementById('printBtn');
    const resetBtn = document.getElementById('resetBtn');
    const container = document.querySelector('.container');
    const controls = document.getElementById('controls');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = titleInput.value.trim();
        const text = textInput.value.trim();

        if (!text) {
            alert('Please enter some text to trace.');
            return;
        }

        // Set the output
        if (title) {
            outputTitle.textContent = title;
            outputTitle.style.display = 'block';
        } else {
            outputTitle.textContent = '';
            outputTitle.style.display = 'none';
        }
        
        outputText.textContent = text;

        window.print();
    });

    printBtn.addEventListener('click', function() {
        window.print();
    });

    resetBtn.addEventListener('click', function() {
        // Reset form
        form.reset();
        
        // Hide output and controls, show form
        outputDiv.style.display = 'none';
        controls.style.display = 'none';
        container.style.display = 'block';
    });
});
