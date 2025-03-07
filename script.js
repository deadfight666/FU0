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
        const selectedDocuments = document.querySelectorAll('input[name="document"]:checked');
        if (selectedDocuments.length === 0) {
            alert('Bitte wählen Sie mindestens ein Dokument aus.');
            return; // Beendet die Funktion, wenn kein Dokument ausgewählt ist
        }
    }

    // Nur fortfahren, wenn der aktuelle Schritt kleiner als 4 ist
    if (currentStep < 4) {
        // Aktuellen Schritt ausblenden
        document.getElementById(`step${currentStep}`).classList.remove('active');
        // Zum nächsten Schritt wechseln
        currentStep++;
        // Nächsten Schritt anzeigen
        document.getElementById(`step${currentStep}`).classList.add('active');

        // Adressfelder anzeigen, wenn "Postversand" ausgewählt ist
        if (currentStep === 3) {
            const deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
            if (deliveryMethod === 'Post') {
                document.getElementById('addressFields').style.display = 'block';
            } else {
                document.getElementById('addressFields').style.display = 'none';
            }
        }

        // Zusammenfassung im letzten Schritt anzeigen
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
    // Nur zurückgehen, wenn der aktuelle Schritt größer als 1 ist
    if (currentStep > 1) {
        // Aktuellen Schritt ausblenden
        document.getElementById(`step${currentStep}`).classList.remove('active');
        // Zum vorherigen Schritt wechseln
        currentStep--;
        // Vorherigen Schritt anzeigen
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