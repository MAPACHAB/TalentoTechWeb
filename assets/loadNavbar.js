document.addEventListener ('DOMContentLoaded', function(){

    fetch('../assets/navbar.html')
    .then(response => {
        return response.text();
    })
    .then(data =>{
                                        //inner agrega un archivo lo estamos haciendo con java y no con html 
        document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => console.log( 'Error:', error))
})