document.addEventListener("CERTIFICATEContentLoaded", function (){
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }
    document.getElementById("container").addEventListener("submit", function (eventData) {
        eventData.preventDefault();
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);
    });
});

function processForm(form){

}