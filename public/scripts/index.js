import { $ } from "./common.js"

$('#loginPageBtn').addEventListener('click', () => { //login page btn in navbar
  fetch('./templates/login.html')
    .then((res) => res.text())
    .then((html) => {
      $('#contentContainer').innerHTML = html
      import("./login/login.js").then((m) => m.default())

      $('#goToSignup').addEventListener('click', (e) => { //go to signup btn in login page
        e.preventDefault()
        fetch('./templates/signup.html')
          .then((r) => r.text())
          .then((html) => {
            $('#contentContainer').innerHTML = html
            import("./signup/signup.js").then((m) => m.default())

            $('#goToLogin').addEventListener('click', (e) => { //go to login btn in signup page
              e.preventDefault()
              fetch('./templates/login.html')
                .then((rr) => rr.text())
                .then((html2) => {
                  $('#contentContainer').innerHTML = html2
                  import("./login/login.js").then((m) => m.default())
                  $('#goToSignup').addEventListener('click', (e) => {
                    e.preventDefault()
                    $('#loginPageBtn').click()
                  })
                })
            })
          })
      })
    })
})

$('#signupPageBtn').addEventListener('click', () => { // signup page btn in navbar
  fetch('./templates/signup.html')
    .then((res) => res.text())
    .then((html) => {
      $('#contentContainer').innerHTML = html
      import("./signup/signup.js").then((m) => m.default())

      $('#goToLogin').addEventListener('click', (e) => { //go to login btn in signup page
        e.preventDefault()
        fetch('./templates/login.html')
          .then((r) => r.text())
          .then((html) => {
            $('#contentContainer').innerHTML = html
            import("./login/login.js").then((m) => m.default())

            $('#goToSignup').addEventListener('click', (e) => { //goto signup button in login page
              e.preventDefault()
              $('#signupPageBtn').click()
            })
          })
      })
    })
})