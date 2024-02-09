if ( document.getElementById('print') !== null){
    let printElement = documemt.getElementById('print');
    printElement.addEventListener('click', function(e){
        window.print();
        console.log("invoke print");
    })
    let theData = new Date().tolocaleDatesString('en-us', {weekday:"long", year:"numeric", month:"numeric", day:"numeric"})
    let dataBox = document.getElementById('theDate');
    dataBox.innerText = theDate;
}