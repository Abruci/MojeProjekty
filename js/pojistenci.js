// Function to add a new insured person to the list
function addInsuredPerson(name, surname, age, phoneNumber) {
    var tableBody = document.getElementById('pojisteniList');
  
    var newRow = document.createElement('tr');
    var nameCell = document.createElement('td');
    var surnameCell = document.createElement('td');
    var ageCell = document.createElement('td');
    var phoneCell = document.createElement('td');
    var deleteCell = document.createElement('td');
  
    nameCell.textContent = name;
    surnameCell.textContent = surname;
    ageCell.textContent = age;
    phoneCell.textContent = phoneNumber;
  
    // Create and append the delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Smazat';
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.type = 'button';
    deleteButton.onclick = function() {
      tableBody.removeChild(newRow);
    };
    
    deleteCell.appendChild(deleteButton);
  
    newRow.appendChild(nameCell);
    newRow.appendChild(surnameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(phoneCell);
    newRow.appendChild(deleteCell);
  
    tableBody.appendChild(newRow);
  }
  
  // Event listener for form submission
  document.getElementById('pojistenyForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var jmeno = document.getElementById('jmeno').value;
    var prijmeni = document.getElementById('prijmeni').value;
    var vek = document.getElementById('vek').value;
    var telefon = document.getElementById('telefon').value;
  
    addInsuredPerson(jmeno, prijmeni, vek, telefon);
  
    this.reset();
  });
  