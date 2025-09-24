import { $ } from "./common.js"

$('#loginPageBtn').addEventListener('click', () => {
  fetch('./templates/login.html')
    .then((res) => res.text())
    .then((html) => {
      $('#contentContainer').innerHTML = html
      import("./login/login.js").then((m) => m.default())

      $('#goToSignup').addEventListener('click', (e) => {
        e.preventDefault()
        fetch('./templates/signup.html')
          .then((r) => r.text())
          .then((html) => {
            $('#contentContainer').innerHTML = html
            import("./signup/signup.js").then((m) => m.default())

            $('#goToLogin').addEventListener('click', (e) => {
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

$('#signupPageBtn')?.addEventListener('click', () => {
  fetch('./templates/signup.html')
    .then((res) => res.text())
    .then((html) => {
      $('#contentContainer').innerHTML = html
      import("./signup/signup.js").then((m) => m.default())

      $('#goToLogin').addEventListener('click', (e) => {
        e.preventDefault()
        fetch('./templates/login.html')
          .then((r) => r.text())
          .then((html) => {
            $('#contentContainer').innerHTML = html
            import("./login/login.js").then((m) => m.default())

            $('#goToSignup').addEventListener('click', (e) => {
              e.preventDefault()
              $('#signupPageBtn')?.click()
            })
          })
      })
    })
})