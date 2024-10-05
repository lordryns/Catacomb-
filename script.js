
function getFact() {
  let url = "https://catfact.ninja/fact";
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        alert("Network error!");
      }
      
      return response.json();
    })
    .then(data => data.fact)
    
    .catch(error => {
      alert("Error: ", error);
    })
    
}



function getImage() {
  const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_3SjaF9VSRoOp7YAtzUDCWIbYr4vc6JTGQRrzTCHN2gWX7NUXcL3mDj6JsGmybJ9s"
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow'
};

return fetch("https://api.thecatapi.com/v1/images/search", requestOptions)
  .then(response => response.json())
  .then(result => result[0].url)
  .catch(error => console.log('error', error));        
}


function displayCatFact() {
  getFact()
    .then(fact => {
      document.getElementById("catFactAtHomeScreen").innerHTML = fact;
    })
  
}

function displayCatImage() {
  getImage()
    .then(image => {
      document.getElementById("catImageAtHomeScreen").src = image;
    })
  
}

displayCatImage();
displayCatFact();
