import { log } from "util";

// Add your code here

/// ---FETCH----////  

function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then(resp => resp.json()) 

      .then( function ( userData ) {
        document.body.innerHTML = userData[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }


/////----- ///////