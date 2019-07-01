
//
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// fetch("http://localhost:3000/dogs", configObj);

// function IdToDOM(id) {
//   const p = document.createElement('p')
//   p.innerHTML = id
//   document.body.append(p)
// }
//
// let formData = {
//   name: userName,
//   email: userEmail
// };


function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name,
      email
    })
  }).then(res => res.json())
  .then(data => document.body.innerHTML = data["id"])
  .catch(error => document.body.innerHTML = error.message)
}
