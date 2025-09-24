import { $ } from "../common.js"

const loginFn = () => { //for login
  const form = $('#loginForm')
  const inputs = form.querySelectorAll("input")

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault() // if enter is pressed prevent default form submission
        if (index < inputs.length - 1) {
          inputs[index + 1].focus() //if not on final field go to next
        } else {
          form.requestSubmit() //submit if in last field
        }
      }
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!form.checkValidity()) {
      form.classList.add('was-validated')
      return
    }

    fetch('http://localhost:3000/login', { //post request
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: $('#email').value,
        password: $('#password').value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message)
        if (data.message.startsWith("Welcome")) {
          fetch('./templates/home.html') //redirect to home page
            .then((res) => res.text())
            .then((fragments) => $('#contentContainer').innerHTML = fragments)
        }
      })
      .catch((err) => console.error(err))
  })
}

export default loginFn