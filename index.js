// function submitData(user_name,user_email) {
    
//     let configObj = { method: "POST", 
//                       headers: {
//                                   "Content-Type" : "application/json",
//                                   "Accept": "application/json" },
//                       body : JSON.stringify({name: user_name,email: user_email})
//                     };

//     return fetch('http://localhost:3000/users',configObj)
//           .then(function(response) {return response.json();
// })
//           .then(function(object) {console.log(object);})
//           .catch(function(error) {alert('There is an error! Please retry!'); console.log(error.message); });
// }


function submitData(name,email) {
    let data = { name: name, email:email };
    let configObj = { method: "POST", 
                      headers: { "Content-Type": "application/json",
                                 "Accept": "application/json" },
                      body: JSON.stringify(data)
  };
  return fetch('http://localhost:3000/users',configObj)
    .then(function(response) {return response.json()})
    .then(object => document.body.innerHTML += object.id)
    .catch(error => document.body.innerHTML += error.message);
}