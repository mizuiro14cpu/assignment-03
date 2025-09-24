import { $ } from "./common.js"
import loginFn from "./login/login.js"

$('#loginPageBtn').addEventListener('click', () => {
    fetch('./templates/login.html')
    .then((response) => response.text())
    .then((fragments) => $('#contentContainer').innerHTML = fragments)
    .then(loginFn)
})
