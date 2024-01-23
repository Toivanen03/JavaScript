let pelaajat = 0;
if (pelaajat === 0) {                                                               
    document.getElementById("nimiKentät").style.display = "none";                   //Piilotetaan kaikki nimensyöttökentät
    document.getElementById("aloitusNappi").style.display = "none";                 //sekä pelinaloituspainike sivua ladatessa
}

document.getElementById("muuPisteMaaraLaatikko").style.display = "none";            //Piilotetaan myös valinnaisen pistemäärän syöttökenttä

let pisteet = 100;                                                                  //Alustetaan muuttujat
let noppia = 1;
let yksinoppa = document.getElementById("yksiNoppa");
let kaksinoppaa = document.getElementById("kaksiNoppaa");
let sataPinnaa = document.getElementById("pisteMaara");
let muutPinnat = document.getElementById("muuPisteMaara");
let pelaajaLista = {}                                                               //Listaan tallennetaan pelaajien nimet.

document.addEventListener("DOMContentLoaded", function() {              
    yksinoppa.addEventListener("change", function() {                               //Kuunnellaan noppamäärän valintaa
        noppia = 1;
    });
    kaksinoppaa.addEventListener("change", function() {
        noppia = 2;
    });

    muutPinnat.addEventListener("change", function() {                              //Piilotetaan pistemäärän syöttökenttä, mikäli
        document.getElementById("muuPisteMaaraLaatikko").style.display = "block";   //sadan pisteen painike on valittuna
    })
    sataPinnaa.addEventListener("change", function() {
        document.getElementById("muuPisteMaaraLaatikko").style.display = "none";
        pisteet = 100;
    })
});


function ohjeet() {                                                                 //Funktio avaa ohjeruudun...
    document.getElementById("ohjeLaatikko").style.display = "block";
}


function suljeOhje() {                                                              //...ja tämä sulkee.
    document.getElementById("ohjeLaatikko").style.display = "none";
}


function pelaajienMaara(maara) {                                                    
    if (maara >= 2) {                                                           //Näytetään tai piilotetaan tarpeettomat nimensyöttö-
        pelaajat = 2                                                            //kentät valitun pelaajamäärän mukaan. Lisäksi
        document.getElementById("nimiKentät").style.display = "block";          //päivitetään pelaajamäärän arvo.
        document.getElementById("pelaaja2Nimi").style.display = "block";
        document.getElementById("aloitusNappi").style.display = "block";
    } else {
        document.getElementById("pelaaja2Nimi").style.display = "none";
    }

    if (maara >= 3) {
        pelaajat = 3
        document.getElementById("pelaaja3Nimi").style.display = "block";
    } else {
        document.getElementById("pelaaja3Nimi").style.display = "none";
    }

    if (maara >= 4) {
        pelaajat = 4
        document.getElementById("pelaaja4Nimi").style.display = "block";
    } else {
        document.getElementById("pelaaja4Nimi").style.display = "none";
    }

    if (maara >= 5) {
        pelaajat = 5
        document.getElementById("pelaaja5Nimi").style.display = "block";
    } else {
        document.getElementById("pelaaja5Nimi").style.display = "none";
    }

    if (maara >= 6) {
        pelaajat = 6
        document.getElementById("pelaaja6Nimi").style.display = "block";
    } else {
        document.getElementById("pelaaja6Nimi").style.display = "none";
    }

    if (maara >= 7) {
        pelaajat = 7
        document.getElementById("pelaaja7Nimi").style.display = "block";
    } else {
        document.getElementById("pelaaja7Nimi").style.display = "none";
    }

    if (maara >= 8) {
        pelaajat = 8
        document.getElementById("pelaaja8Nimi").style.display = "block";
    } else {
        document.getElementById("pelaaja8Nimi").style.display = "none";
    }
}


function aloitaPeli() {                                                                     //Pelinaloitusfunktiossa tallennetaan listaan
    if (pelaajat >= 1) {                                                                    //pelaajien nimet. Mikäli syöttökenttä on tyhjä,
        pelaajaLista.nimi1 = document.getElementById("pelaaja1").value || "Pelaaja 1";      //käytetään oletusnimeä "Pelaaja 1", "Pelaaja 2"
    }                                                                                       //jne.
    if (pelaajat >= 2) {
        pelaajaLista.nimi2 = document.getElementById("pelaaja2").value || "Pelaaja 2";
    }
    if (pelaajat >= 3) {
        pelaajaLista.nimi3 = document.getElementById("pelaaja3").value || "Pelaaja 3";
    }
    if (pelaajat >= 4) {
        pelaajaLista.nimi4 = document.getElementById("pelaaja4").value || "Pelaaja 4";
    }
    if (pelaajat >= 5) {
        pelaajaLista.nimi5 = document.getElementById("pelaaja5").value || "Pelaaja 5";
    }
    if (pelaajat >= 6) {
        pelaajaLista.nimi6 = document.getElementById("pelaaja6").value || "Pelaaja 6";
    }
    if (pelaajat >= 7) {
        pelaajaLista.nimi7 = document.getElementById("pelaaja7").value || "Pelaaja 7";
    }
    if (pelaajat >= 8) {
        pelaajaLista.nimi8 = document.getElementById("pelaaja8").value || "Pelaaja 8";
    }

    if (muutPinnat.checked) {                                                   //Tarkistetaan, että pelaajan syöttämä pisteraja                                                               
        let arvo = document.getElementById("muuPisteMaaraLaatikko").value;      //on numeerinen kokonaisluku väliltä 50-1000.
        let arvoMaara = parseFloat(arvo);
        
        if (!isNaN(arvoMaara) && Number.isInteger(arvoMaara) && arvoMaara >= 50 && arvoMaara <= 1000) {
            pisteet = arvoMaara;
        } else {
            alert("Tavoitepisteiden tulee olla kokonaisluku välillä 50-1000");
            return;
        }
    } else {
        pisteet = 100;
    }

    localStorage.setItem("pelaajienNimet", JSON.stringify(pelaajaLista));           //Tallennetaan syötteiden mukaisesti muuttuneet
    localStorage.setItem("noppia", noppia);                                         //muuttujien arvot localStorageen.
    localStorage.setItem("pelaajienMaara", pelaajat);
    localStorage.setItem("pisteet", pisteet);

            
    yksinoppa.removeEventListener("change", function() {                            //Poistetaan tapahtumakuuntelijat (en ole varma, toimiiko näin)
        noppia = 1;
    });
    kaksinoppaa.removeEventListener("change", function() {
        noppia = 2;
    });

    muutPinnat.removeEventListener("change", function() {                              
        document.getElementById("muuPisteMaaraLaatikko").style.display = "block";
    })
    sataPinnaa.removeEventListener("change", function() {
        document.getElementById("muuPisteMaaraLaatikko").style.display = "none";
        pisteet = 100;
    })

    window.location.href = "noppa.html";                                          //Lopuksi peli avataan uudessa ikkunassa.
}