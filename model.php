<?php
class Pojistenc {
    private $jmeno;
    private $prijmeni;
    private $vek;
    private $telefon;

    public function __construct($jmeno, $prijmeni, $vek, $telefon) {
        $this->jmeno = $jmeno;
        $this->prijmeni = $prijmeni;
        $this->vek = $vek;
        $this->telefon = $telefon;
    }

    // Metody pro vkládání a načítání dat z databáze
    // ...
}
?>
