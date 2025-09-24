import {$} from '../common.js'

const loginFn = () => {
    $('#loginBtn').addEventListener('click', () => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({name: $('#username').value}),
        })
    })

    
}

export default loginFn