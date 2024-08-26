// Třída pro správu pojištěných osob
class Pojisteny {
    constructor(jmeno, prijmeni, vek, telefon) {
      this.jmeno = jmeno;
      this.prijmeni = prijmeni;
      this.vek = vek;
      this.telefon = telefon;
    }
  
    toString() {
      return `${this.jmeno} ${this.prijmeni}, věk: ${this.vek}, tel: ${this.telefon}`;
    }
  }
  
  // Kolekce pro ukládání pojištěných osob
  let pojistenci = [];
  
  // Funkce pro přidání nového pojištěného
  function pridatPojisteneho(jmeno, prijmeni, vek, telefon) {
    let pojisteny = new Pojisteny(jmeno, prijmeni, vek, telefon);
    pojistenci.push(pojisteny);
    zobrazitPojistence();
  }
  
  // Funkce pro zobrazení seznamu pojištěných
  function zobrazitPojistence() {
    let seznam = document.getElementById('seznamPojistenych');
    seznam.innerHTML = '';
    pojistenci.forEach(pojisteny => {
      let polozka = document.createElement('li');
      polozka.textContent = pojisteny.toString();
      seznam.appendChild(polozka);
    });
  }

function smazatPojisteneho(index) {
  // Odstraní pojištěného z pole na zadaném indexu
  pojisteni.splice(index, 1);
  
  // Aktualizuje zobrazení seznamu pojištěných osob
  zobrazitSeznam(pojisteni);
}

function zobrazitSeznam(pojisteni) {
  // Zde byste měli implementovat logiku pro zobrazení aktualizovaného seznamu
}
