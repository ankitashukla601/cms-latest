// // js/google-signin.js

// function handleGoogleSignin(response) {
//     const responsePayload = decodeJwtResponse(response.credential);

//     console.log("ID: " + responsePayload.sub);
//     console.log('Full Name: ' + responsePayload.name);
//     console.log('Given Name: ' + responsePayload.given_name);
//     console.log('Family Name: ' + responsePayload.family_name);
//     console.log("Image URL: " + responsePayload.picture);
//     console.log("Email: " + responsePayload.email);
// }




// function decodeJwtResponse (token) {
//     var base64Url = token.split('.')[1];
//     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//     var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));

//     return JSON.parse(jsonPayload);
// }


// function decodeJwtResponse(data){
//     signIn(parseJwt(data))
// }

//AIzaSyCQSasAcI-jW3acOGJ_hmQryhiVj0i9no8


  window.onload = function () {
    google.accounts.id.initialize({
      client_id: '36603383535-ht2pu923gq0g8dgibr0otc74q2jg9a5j.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
  };
