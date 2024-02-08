var generateButtons = document.querySelectorAll('#generate1, #generate2, #generate3');
var forms = document.querySelectorAll('form');
// Add an event listener to each generate button
generateButtons.forEach(function(button, index) {
    button.addEventListener('click', function(event) {
        // Prevent the default behavior
        event.preventDefault();

        // Get the certificate class and input field ids from the corresponding form
        var certificateClass = forms[index].previousElementSibling.className;
        var nameId = 'name' + certificateClass.slice(-1);
        var detailsId = 'details' + certificateClass.slice(-1);
        var dateId = 'date' + certificateClass.slice(-1);
        var signatureId = 'signature' + certificateClass.slice(-1);
        var certificatenameId = 'certificatename' + certificateClass.slice(-1);

        // Generate the certificate using the provided values
        generateCertificate(certificateClass, nameId, detailsId, dateId, signatureId, certificatenameId);
    });
});

function generateCertificate(certificateClass, nameId, detailsId, dateId, signatureId, certificatenameId) {
    // Get the values from the input fields
    var name = document.getElementById(nameId).value;
    var details = document.getElementById(detailsId).value;
    var date = document.getElementById(dateId).value;
    var signature = document.getElementById(signatureId).value;
    var certificatename = document.getElementById(certificatenameId).value;

    // Create the certificate using the provided values
    var certificate = document.createElement('div');
    certificate.className = certificateClass;

    // Add the certificate elements
    var h2 = certificate.querySelector('h2');
    h2.textContent = h2.textContent.replace('OF', 'OF ' + h2.textContent.split(' ')[1]);

    var nameInput = certificate.querySelector('#' + nameId);
    var detailsInput = certificate.querySelector('#' + detailsId);
    var dateInput = certificate.querySelector('#' + dateId);
    var signatureInput = certificate.querySelector('#' + signatureId);
    var certificatenameInput = certificate.querySelector('#' + certificatenameId);

    nameInput.value = name;
    detailsInput.value = details;
    dateInput.value = date;
    signatureInput.value = signature;
    certificatenameInput.value = certificatename;

    // Append the certificate to the container
    var container = document.querySelector('.container');
    container.appendChild(certificate);
}
console.log("Ready");