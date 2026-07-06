document.addEventListener('DOMContentLoaded', () => {
    console.log('DEBUG TEST')
    const button = document.getElementById('button');

    button.addEventListener('click', () => {
        console.log('DEGUB TEST')
        if (button.classList.contains('inactive')) {
            button.classList.remove('inactive');
            button.classList.add('active');
        } else {
            button.classList.remove('active');
            button.classList.add('inactive');
        }
    })
})