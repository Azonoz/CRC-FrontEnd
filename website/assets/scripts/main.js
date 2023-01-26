// Animations
AOS.init({
    anchorPlacement: 'top-left',
    duration: 1000
});

// Visitor Count
async function get_visitors() {
  // call post api request function
  //await post_visitor();
  try {
      let response = await fetch('https://fgtqm2jrki.execute-api.ap-southeast-2.amazonaws.com/Prod', {
          method: 'GET',
          headers: {
              //'x-api-key': 'JslbDfdt1F8fl7wE4CRIj1Oqidmtmzqw4lZ539Sj',
          }
      });
      let data = await response.json()
      document.getElementById("visitors").innerHTML = data['counter'] + " visits.";
      console.log(data);
      return data;
  } catch (err) {
      console.error(err);
  }
}
get_visitors();

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const brisbane = { lat: -27.46907, lng: 153.02640 };
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4.5,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: brisbane,
        map: map,
    });
}

window.initMap = initMap;