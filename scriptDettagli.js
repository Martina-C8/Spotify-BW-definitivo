const params = new URLSearchParams(location.search)
console.log(params)
let id = params.get("id") // da passare a getData