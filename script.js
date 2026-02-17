document.addEventListener('DOMContentLoaded', () => {
    const addTextBtn = document.getElementById('addTextBtn');
    const outputContainer = document.getElementById('outputContainer');

    addTextBtn.onclick = function() {
        const newPara = document.createElement('p');
        newPara.textContent = "Цей текст додано за допомогою JavaScript (" + new Date().toLocaleTimeString() + ")";
        newPara.style.color = "#42f5aa";
        outputContainer.appendChild(newPara);
    };

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeBox = document.getElementById('themeBox');

    themeToggleBtn.addEventListener('click', function() {
        themeBox.classList.toggle('light-theme');
        
        if (themeBox.classList.contains('light-theme')) {
            themeToggleBtn.textContent = "Повернути темну тему";
        } else {
            themeToggleBtn.textContent = "Перемкнути на світлу";
        }
    });

});