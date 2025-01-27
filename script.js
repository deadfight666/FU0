document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Hier könnte eine Überprüfung der Login-Daten erfolgen
    // Für dieses Beispiel zeigen wir einfach das Bestellformular an

    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('orderContainer').style.display = 'block';
});

let currentStep = 1;

function nextStep() {
    // Überprüfung, ob der Benutzer im ersten Schritt mindestens ein Dokument ausgewählt hat
    if (currentStep === 1) {
        const selectedDocuments = Array.from(document.querySelectorAll('input[name="document"]:checked')).map(el => el.value);
        if (selectedDocuments.length === 0) {
            alert('Bitte wählen Sie mindestens ein Dokument aus.');
            return; // Beendet die Funktion, wenn kein Dokument ausgewählt ist
        }
    }

    if (currentStep < 4) {
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
}

function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step${currentStep}`).classList.add('active');
    }
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