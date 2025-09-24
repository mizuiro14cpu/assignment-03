import express from "express"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

let users = [] //array for user data

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))

app.post("/signup", (req, res) => {
  const { firstname, lastname, email, birthdate, password, repassword } = req.body //destructure user data from request

  if (!firstname || !lastname || !email || !birthdate || !password || !repassword) { // check if all present
    return res.status(400).json({ message: "All fields are required" })
  }
  if (password !== repassword) {
    return res.status(400).json({ message: "Passwords do not match" }) //check if password and repassword match
  }
  if (users.find((u) => u.email === email)) { //check if email already exists in storage
    return res.status(400).json({ message: "User already exists" })
  }

  const newUser = { firstname, lastname, email, birthdate, password } //new user object
  users.push(newUser)

  console.log("Current users:", users)
  res.json({ message: "Signup successful!" })
})

app.post("/login", (req, res) => {
  const { email, password } = req.body //destructure email pass from request
  const user = users.find((u) => u.email === email && u.password === password) //find user w/ matching email and pass

  if (!user) { //check if user found
    return res.status(401).json({ message: "Invalid email or password" })
  }

  res.json({ message: `Welcome ${user.firstname} ${user.lastname}!` })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})