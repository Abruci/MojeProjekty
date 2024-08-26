// Pole pojisteni pro uchování dat o pojištěných
let pojisteni = [];

// Funkce pro přidání nového pojištěného do seznamu
function pridatPojisteneho(jmeno, prijmeni, vek, telefon) {
pojisteni.push({
    id: Date.now(), // jedinečný identifikátor
    jmeno: jmeno,
    prijmeni: prijmeni,
    vek: vek,
    telefon: telefon
});
aktualizovatSeznam();
}

// Funkce pro smazání pojištěného z seznamu
function smazatPojisteneho(id) {
pojisteni = pojisteni.filter(pojisteny => pojisteny.id !== id);
aktualizovatSeznam();
}

// Funkce pro aktualizaci zobrazení seznamu pojištěných
function aktualizovatSeznam() {
let tabulka = document.getElementById('seznamPojistenych');
tabulka.innerHTML = `
<tr>
    <th>Jméno</th>
    <th>Příjmení</th>
    <th>Věk</th>
    <th>Telefon</th>
    <th>Smazat</th>
</tr>
  `; // Nadpisy tabulky

pojisteni.forEach(pojisteny => {
    let radek = document.createElement('tr');
    radek.innerHTML = `
    <td>${pojisteny.jmeno}</td>
    <td>${pojisteny.prijmeni}</td>
    <td>${pojisteny.vek}</td>
    <td>${pojisteny.telefon}</td>
    <td><button onclick="smazatPojisteneho(${pojisteny.id})">Smazat</button></td>
    `;
    tabulka.appendChild(radek);
});
}

// Event listener pro odeslání formuláře
document.getElementById('formNovyPojistenec').addEventListener('submit', function(event) {
  event.preventDefault(); // Zabráníme klasickému odeslání formuláře

let jmeno = document.getElementById('jmeno').value;
let prijmeni = document.getElementById('prijmeni').value;
let vek = document.getElementById('vek').value;
let telefon = document.getElementById('telefon').value;

pridatPojisteneho(jmeno, prijmeni, vek, telefon);

// Vyčistíme formulář pro další použití
this.reset();
});
