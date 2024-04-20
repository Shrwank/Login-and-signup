const inputFields = document.querySelectorAll('.input-box input');
inputFields.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value !== '') {
            this.parentNode.querySelector('label').classList.add('hidden');
         } else {
            this.parentNode.querySelector('label').classList.remove('hidden');
        }
    });
});

