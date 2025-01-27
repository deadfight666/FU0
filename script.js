let currentStep = 1;

function nextStep() {
    document.getElementById(`step${currentStep}`).style.display = 'none';
    currentStep++;
    document.getElementById(`step${currentStep}`).style.display = 'block';

    if (currentStep === 3) {
        const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
        if (deliveryMethod === 'Post') {
            document.getElementById('addressFields').style.display = 'block';
        } else {
            document.getElementById('addressFields').style.display = 'none';
        }
    }

    if (currentStep === 4) {
        const selectedDocuments = Array.from(document.querySelectorAll('input[name="document"]:checked')).map(el => el.value);
        const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
        const name = document.querySelector('input[name="name"]').value;
        const address = document.querySelector('input[name="address"]').value;

        let summaryText = `Ausgewählte Dokumente: ${selectedDocuments.join(', ')}<br>`;
        summaryText += `Bereitstellungsart: ${deliveryMethod}<br>`;
        if (deliveryMethod === 'Post') {
            summaryText += `Name: ${name}<br>Adresse: ${address}`;
        }

        document.getElementById('summary').innerHTML = summaryText;
    }
}

function prevStep() {
    document.getElementById(`step${currentStep}`).style.display = 'none';
    currentStep--;
    document.getElementById(`step${currentStep}`).style.display = 'block';
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!document.getElementById('privacyConsent').checked) {
        alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
        return;
    }

    const selectedDocuments = Array.from(document.querySelectorAll('input[name="document"]:checked')).map(el => el.value);
    const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
    const name = document.querySelector('input[name="name"]').value;
    const address = document.querySelector('input[name="address"]').value;

    // Hier könnte die Bestellung an den Server gesendet werden
    alert('Bestellung erfolgreich abgeschlossen!');
});