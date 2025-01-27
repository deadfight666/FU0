let currentStep = 1;

function nextStep(step) {
    document.getElementById(`step${currentStep}`).style.display = 'none';
    currentStep = step;
    document.getElementById(`step${currentStep}`).style.display = 'block';
    
    if (currentStep === 3) {
        const deliveryMethod = document.getElementById('deliveryMethod').value;
        if (deliveryMethod === 'post') {
            document.getElementById('addressFields').style.display = 'block';
        } else {
            document.getElementById('addressFields').style.display = 'none';
        }
    }
    
    if (currentStep === 4) {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const documentType = document.getElementById('documentType').value;
        const deliveryMethod = document.getElementById('deliveryMethod').value;
        const address = document.getElementById('address').value;
        
        let summary = `
            <p><strong>Vorname:</strong> ${firstName}</p>
            <p><strong>Nachname:</strong> ${lastName}</p>
            <p><strong>Dokumententyp:</strong> ${documentType}</p>
            <p><strong>Versandart:</strong> ${deliveryMethod}</p>
        `;
        
        if (deliveryMethod === 'post') {
            summary += `<p><strong>Adresse:</strong> ${address}</p>`;
        }
        
        document.getElementById('summary').innerHTML = summary;
    }
}

function prevStep(step) {
    document.getElementById(`step${currentStep}`).style.display = 'none';
    currentStep = step;
    document.getElementById(`step${currentStep}`).style.display = 'block';
}

document.getElementById('deliveryMethod').addEventListener('change', function() {
    if (this.value === 'post') {
        document.getElementById('addressFields').style.display = 'block';
    } else {
        document.getElementById('addressFields').style.display = 'none';
    }
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Bestellung erfolgreich abgeschlossen!');
    // Hier könnten Sie die Daten an einen Server senden
});