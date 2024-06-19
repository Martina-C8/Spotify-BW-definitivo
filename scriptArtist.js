const params = new URLSearchParams(location.search)
console.log(params)
let id = params.get("id") // da passare a getData
URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
const getData = async () => {
    const data = await fetch(URL, {});
    const response = await data.json();
    //console.log(response)
    return response;
  };

