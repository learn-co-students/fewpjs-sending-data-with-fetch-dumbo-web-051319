// Add your code here

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
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}

// TESTS
// 1) submitData()
//      makes a POST request to /user with a name and email:
//      AssertionError: A fetch to the API was not found: expected
// 2) submitData()
//     handles the POST request response, retrieves the new id value and appends it to the DOM
// 3) submitData()
//    handles a failed POST request using catch, appends the error message to the DOM
