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

    // let theDate1 = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"numeric", day:"numeric"})
    // let dateBox1 = document.getElementById('theDate1');
    // dateBox1.innerText = theDate1;
    // console.log(theDate1);

    // let theDate2 = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"numeric", day:"numeric"})
    // let dateBox2 = document.getElementById('theDate2');
    // dateBox2.innerText = theDate2;
    // console.log(theDate2);

    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        changeCert(eventData.target.value);
    });

    function changeCert(eventValue) {
        let certElement = document.getElementById('certificate');
        certElement.classList = "";
        switch(eventValue){
            case "A":
                certElement.classList.add('blue');
            break;
            case "B":
                certElement.classList.add('green');
            break;
            case "C":
                certElement.classList.add('gov');
            break;
        }

    }

    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); 
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        let nameOutput = document.getElementById('nameOutput');
        let signature = document.getElementById('signatureOutput')
        nameOutput.innerText = formData.name;
        signature.innerText = formData.sign;
        changeCert(formData.type)
      });
    console.log("Ready");

    // document.getElementById('name1').addEventListener('input', function (event) {
    //     let nameOutput1 = document.getElementById('nameOutput1');
    //     nameOutput1.innerText = event.target.value;
    // });
    
    // document.getElementById("myForm1").addEventListener("submit", function (event) {
    //     event.preventDefault(); 
    //     let formData1 = new FormData(event.target);
    //     formData1 = Object.fromEntries(formData1);
    
    //     let nameOutput1 = document.getElementById('nameOutput1');
    //     let info1 = document.getElementById('info1');
    //     nameOutput1.innerText = formData1.name;
    //     info1.innerText = formData1.type;
    // });
    
    // console.log("Ready");

    // document.getElementById('name2').addEventListener('input', function (event) {
    //     let nameOutput2 = document.getElementById('nameOutput2');
    //     nameOutput2.innerText = event.target.value;
    // });
    
    // document.getElementById("myForm2").addEventListener("submit", function (event) {
    //     event.preventDefault(); 
    //     let formData2 = new FormData(event.target);
    //     formData2 = Object.fromEntries(formData2);
    
    //     let nameOutput2 = document.getElementById('nameOutput2');
    //     let info2 = document.getElementById('info2');
    //     nameOutput2.innerText = formData2.name;
    //     info2.innerText = formData2.type;
    // });
    
    // console.log("Ready");

    // document.getElementById('name3').addEventListener('input', function (event) {
    //     let nameOutput3 = document.getElementById('nameOutput3');
    //     nameOutput3.innerText = event.target.value;
    // });
    
    // document.getElementById("myForm3").addEventListener("submit", function (event) {
    //     event.preventDefault(); 
    //     let formData3 = new FormData(event.target);
    //     formData3 = Object.fromEntries(formData3);
    
    //     let nameOutput3 = document.getElementById('nameOutput3');
    //     let info3 = document.getElementById('info3');
    //     nameOutput3.innerText = formData3.name;
    //     info3.innerText = formData3.type;
    // });
    
    // console.log("Ready");

    // document.getElementById('name4').addEventListener('input', function (event) {
    //     let nameOutput4 = document.getElementById('nameOutput4');
    //     nameOutput4.innerText = event.target.value;
    // });
    
    // document.getElementById("myForm4").addEventListener("submit", function (event) {
    //     event.preventDefault(); 
    //     let formData4 = new FormData(event.target);
    //     formData4 = Object.fromEntries(formData4);
    
    //     let nameOutput4 = document.getElementById('nameOutput4');
    //     let info4 = document.getElementById('info4');
    //     nameOutput4.innerText = formData4.name;
    //     info4.innerText = formData4.type;
    // });
    
    // console.log("Ready");

    // document.getElementById('name5').addEventListener('input', function (event) {
    //     let nameOutput5 = document.getElementById('nameOutput5');
    //     nameOutput5.innerText = event.target.value;
    // });
    
    // document.getElementById("myForm5").addEventListener("submit", function (event) {
    //     event.preventDefault(); 
    //     let formData5 = new FormData(event.target);
    //     formData5 = Object.fromEntries(formData5);
    
    //     let nameOutput5 = document.getElementById('nameOutput5');
    //     let info5 = document.getElementById('info5');
    //     nameOutput5.innerText = formData5.name;
    //     info5.innerText = formData5.type;
    // });
    
    console.log("Ready");
});