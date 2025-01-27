let currentStep = 0;

function nextStep() {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add('active');

    if (currentStep === 3) {
        const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
        if (deliveryMethod === 'Post') {
            document.getElementById('addressFields').style.display = 'block';
        } else {
            document.getElementById('addressFields').style.display = 'none';
        }
    }

    if (currentStep === 4) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const selectedDocuments = Array.from(document.querySelectorAll('input[name="document"]:checked')).map(el => el.value);
        const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
        const name = document.querySelector('input[name="name"]').value;
        const address = document.querySelector('input[name="address"]').value;

        let summaryText = `Name: ${firstName} ${lastName}<br>`;
        summaryText += `Ausgewählte Dokumente: ${selectedDocuments.join(', ')}<br>`;
        summaryText += `Bereitstellungsart: ${deliveryMethod}<br>`;
        if (deliveryMethod === 'Post') {
            summaryText += `Lieferadresse: ${name}, ${address}`;
        }

        document.getElementById('summary').innerHTML = summaryText;
    }
}

function prevStep() {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep--;
    document.getElementById(`step${currentStep}`).classList.add('active');
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!document.getElementById('privacyConsent').checked) {
        alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
        return;
    }

    alert('Bestellung erfolgreich abgeschlossen!');
    // Hier könnte die Bestellung an den Server gesendet werden
});