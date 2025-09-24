import { $ } from "../common.js"
import loginFn from "../login/login.js"

const signupFn = () => { //signup function
  const form = $('#signupForm')
  const inputs = form.querySelectorAll("input")

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        if (index < inputs.length - 1) {
          inputs[index + 1].focus() // if not on last field go to the next
        } else {
          form.requestSubmit() //submit if on last field
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

    if ($('#password').value !== $('#repassword').value) { //check if password match
      $('#repassword').setCustomValidity("Passwords do not match")
      form.classList.add('was-validated')
      return
    } else {
      $('#repassword').setCustomValidity("")
    }

    fetch('http://localhost:3000/signup', { //post request
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname: $('#firstname').value,
        lastname: $('#lastname').value,
        email: $('#email').value,
        birthdate: $('#birthdate').value,
        password: $('#password').value,
        repassword: $('#repassword').value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message)
        if (data.message === "Signup successful!") { //check if successfull
          fetch('./templates/login.html')
            .then((res) => res.text())
            .then((fragments) => $('#contentContainer').innerHTML = fragments)
            .then(loginFn) //go to login page
        }
      })
      .catch((err) => console.error(err))
  })
}

export default signupFn