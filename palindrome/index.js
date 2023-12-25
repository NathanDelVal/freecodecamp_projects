document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#check-btn').addEventListener('click', (e) => {
        e.preventDefault();
        const input = document.querySelector('#text-input').value;
        if(input.trim() != '') {
            const stripped_str = input.toLowerCase().replace(/_|\W/g, '');
            const rev_stripped_str = stripped_str.split('').reverse().join('');
            if(stripped_str == rev_stripped_str) {
                document.querySelector('#result').innerText = `${input} is a palindrome`;
            } else {
                document.querySelector('#result').innerText = `${input} is not a palindrome`;
            }
        } else {
            alert('Please input a value');
            document.querySelector('#text-input').value = '';
        }
    })
  })