document.addEventListener("DOMContentLoaded", function () {
    if ( document.getElementById('print') !== null){
        let printElement = document.getElementById('print');
        printElement.addEventListener('click', function(e){
            window.print();
            console.log("invoke print");
        });
    }

    let theDate = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"numeric", day:"numeric"})
    let dateBox = document.getElementById('theDate');
    dateBox.innerText = theDate;
    console.log(theDate);

    let theDate1 = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"numeric", day:"numeric"})
    let dateBox1 = document.getElementById('theDate1');
    dateBox1.innerText = theDate1;
    console.log(theDate1);

    let theDate2 = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"numeric", day:"numeric"})
    let dateBox2 = document.getElementById('theDate2');
    dateBox2.innerText = theDate2;
    console.log(theDate2);

    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); 
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        let nameOutput = document.getElementById('nameOutput');
        let info = document.getElementById('info');
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;

      });
    console.log("Ready");

    document.getElementById('name1').addEventListener('input', function (event) {
        let nameOutput1 = document.getElementById('nameOutput1');
        nameOutput1.innerText = event.target.value;
    });
    
    document.getElementById("myForm1").addEventListener("submit", function (event) {
        event.preventDefault(); 
        let formData1 = new FormData(event.target);
        formData1 = Object.fromEntries(formData1);
    
        let nameOutput1 = document.getElementById('nameOutput1');
        let info1 = document.getElementById('info1');
        nameOutput1.innerText = formData1.name;
        info1.innerText = formData1.type;
    });
    
    console.log("Ready");

    document.getElementById('name2').addEventListener('input', function (event) {
        let nameOutput2 = document.getElementById('nameOutput2');
        nameOutput2.innerText = event.target.value;
    });
    
    document.getElementById("myForm2").addEventListener("submit", function (event) {
        event.preventDefault(); 
        let formData2 = new FormData(event.target);
        formData2 = Object.fromEntries(formData2);
    
        let nameOutput2 = document.getElementById('nameOutput2');
        let info2 = document.getElementById('info2');
        nameOutput2.innerText = formData2.name;
        info2.innerText = formData2.type;
    });
    
    console.log("Ready");
});