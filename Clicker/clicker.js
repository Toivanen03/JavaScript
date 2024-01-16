const savedScore = localStorage.getItem('pisteet');
const savedSpeed = localStorage.getItem('nopeus');
let pisteet = savedScore ? parseInt(savedScore) : 0;
let nopeus = savedSpeed ? parseFloat(savedSpeed) : 1;

let tausta = document.getElementById("taustamusiikki");
let efekti = document.getElementById("coin");

function nollaaPisteet() {
    pisteet = 0;
    nopeus = 1;
    localStorage.setItem('pisteet', pisteet.toString());
    musiikkiNopeus(1);
    updateScore();
}

function mykistäMusiikki() {
    let checkboxMusic = document.getElementById("musiikkiPäällä");
    tausta.muted = checkboxMusic.checked;
}

function mykistäEfektit() {
    let checkbox = document.getElementById("efektitPäällä");
    efekti.muted = checkbox.checked;
}

function mVoimakkuus(mVoimakkuus) {
    tausta.volume = mVoimakkuus;
}

function eVoimakkuus(eVoimakkuus) {
    efekti.volume = eVoimakkuus;
}

function musiikkiNopeus(uusiNopeus) {
    tausta.playbackRate = uusiNopeus;
    nopeus = uusiNopeus;
    localStorage.setItem("nopeus", uusiNopeus.toString());
}

function playEfekti() {
    let efekti = document.getElementById("coin");
    efekti.currentTime = 0;
    efekti.play();
}

window.onload = function() {
    tausta.volume = 0.2;
    efekti.volume = 0.2;
    musiikkiNopeus(nopeus);
    updateScore();
};

function clickOssi() {
    pisteet++;
    localStorage.setItem('pisteet', pisteet.toString());
    localStorage.setItem('nopeus', nopeus.toString());
    if (pisteet === 10) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Tukesi riittävät vihkoon ja lyijykynään. Tiesi kirjailijaksi on alkamassa!");
        saavutus(saavutusTeksti);
        musiikkiNopeus(1.1);
    }
    if (pisteet === 40) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Luovan tauon aika. Rahasi riittävät pieneen kossuun.");
        saavutus(saavutusTeksti);
        musiikkiNopeus(1.2);
    }
    if (pisteet === 100) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Löydät kirpparilta käytetyn kirjoituskoneen.");
        saavutus(saavutusTeksti);
        musiikkiNopeus(1.3);
    }
    if (pisteet === 500) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Rahasi riittävät jo läppäriin. Nyt alkaa Lyyti kirjoittamaan!");
        saavutus(saavutusTeksti);
        musiikkiNopeus(1.4);
    }
    if (pisteet === 1000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Ensimmäinen sivu valmis. Kolauspäivän kunniaksi Kontulan Himabaariin yhdelle!");
        saavutus(saavutusTeksti);
        musiikkiNopeus(1.5);
    }
    if (pisteet === 10000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Ensimmäinen luku valmis. Kelan rahat riittävät tänään keskustaan asti. Roskabaariin!");
        saavutus(saavutusTeksti);
        musiikkiNopeus(1.6);
    }
    if (pisteet === 100000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Aki, Make ja Pera tulivat kylään ja joivat rahasi. Onneksi ensi viikolla kolahtaa taas.");
        saavutus(saavutusTeksti);
        musiikkiNopeus(1.7);
    }
    if (pisteet === 1000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Kahden kuukauden ryyppäämisen jälkeen jatkat kirjoittamista.");
        saavutus(saavutusTeksti);
        musiikkiNopeus(1.8);
    }
    if (pisteet === 10000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ('Iltahömppä kirjoittaa sinusta "uutisen". Olet julkkis!');
        saavutus(saavutusTeksti);
        musiikkiNopeus(1.9);
    }
    if (pisteet === 100000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Kirjasi on valmis. Päätät juhlistaa saavutustasi pienellä päiväkännillä.");
        saavutus(saavutusTeksti);
        musiikkiNopeus(2);
    }
    if (pisteet === 200000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Kirjasi julkaistaan. Hip hei!");
        saavutus(saavutusTeksti);
        musiikkiNopeus(2.1);
    }
    if (pisteet === 300000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Kukaan osta kirjaasi, mutta onneksi tuet juoksevat!");
        saavutus(saavutusTeksti);
        musiikkiNopeus(2.2);
    }
    if (pisteet === 500000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Teostasi on myyty jo kymmenen kappaletta. Olet kohta maksanut velkasi yhteiskunnalle!");
        saavutus(saavutusTeksti);
        musiikkiNopeus(2.3);
    }
    if (pisteet === 1000000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Aloitat uuden kirjan kirjoittamisen.");
        saavutus(saavutusTeksti);
        musiikkiNopeus(2.4);
    }
    if (pisteet === 2000000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Luova tauko. Kukaan ei osta kirjojasi.")
        saavutus(saavutusTeksti);
        musiikkiNopeus(2.5);
    }
    if (pisteet === 3000000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Iltahömppä kirjoittaa sielunkumppanistasi. Muutat yhteen Alma Tuuvan kanssa.")
        saavutus(saavutusTeksti);
        musiikkiNopeus(2.6);
    }
    if (pisteet === 4000000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Kela aloittaa liikaa maksetun asumistuen takaisinperinnän. Kännit hiluilla.")
        saavutus(saavutusTeksti);
        musiikkiNopeus(2.7);
    }
    if (pisteet === 7000000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Jatkat toista teostasi.")
        saavutus(saavutusTeksti);
        musiikkiNopeus(2.8);
    }
    if (pisteet === 8000000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Toinen kirjasi valmistuu.")
        saavutus(saavutusTeksti);
        musiikkiNopeus(2.9);
    }
    if (pisteet === 9000000000) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Toista kirjaasi myydään lähes tusinan verran!")
        saavutus(saavutusTeksti);
        musiikkiNopeus(3);
    }
    if (pisteet === 9999999999) {
        saavutusTeksti = document.getElementById("seloste").innerHTML = ("Olet täysiverinen sossupummi ja elämäntapataiteilija. Onneksi olkoon!")
        saavutus(saavutusTeksti);
        musiikkiNopeus(1);
        pisteet = 0;
    }
    updateScore();
    showImage();
    playEfekti();
}

function saavutus() {
    document.getElementById("saavutusLaatikko").style.display = "block";
    setTimeout(function () {
        document.getElementById("saavutusLaatikko").style.display = "none";
    }, 20000);
}

function updateScore() {
    scoreCalc(pisteet);
    
}

function showImage() {
    let image = document.createElement("img");
    image.src = "Kuvat/kela.png";
    image.style.width = "200px";
    image.style.position = "absolute";
    image.style.left = (event.pageX - image.width / 2 + window.scrollX + 70) + "px";
    image.style.top = (event.pageY - image.height / 2 + window.scrollY - 270) + "px";
    document.body.appendChild(image);
    image.style.display = "block";
    image.classList.add("animaatio");
    setTimeout(function () {
        document.body.removeChild(image);
    }, 1000);
}

function scoreCalc(pisteet) {
    const numerot = [
        '<img src="Kuvat/0.png" alt="nolla" width="52px">',
        '<img src="Kuvat/1.png" alt="yksi" width="38px">',
        '<img src="Kuvat/2.png" alt="kaksi" width="50px">',
        '<img src="Kuvat/3.png" alt="kolme" width="52px">',
        '<img src="Kuvat/4.png" alt="neljä" width="50px">',
        '<img src="Kuvat/5.png" alt="viisi" width="50px">',
        '<img src="Kuvat/6.png" alt="kuusi" width="48px">',
        '<img src="Kuvat/7.png" alt="seitsemän" width="45px">',
        '<img src="Kuvat/8.png" alt="kahdeksan" width="50px">',
        '<img src="Kuvat/9.png" alt="yhdeksän" width="46px">'
    ];

    document.getElementById("miljardit").innerHTML = numerot[Math.floor(pisteet / 1000000000) % 10];
    document.getElementById("sadatmillit").innerHTML = numerot[Math.floor(pisteet / 100000000) % 10];
    document.getElementById("kymppimillit").innerHTML = numerot[Math.floor(pisteet / 10000000) % 10];
    document.getElementById("miljoonat").innerHTML = numerot[Math.floor(pisteet / 1000000) % 10];
    document.getElementById("sadattonnit").innerHTML = numerot[Math.floor(pisteet / 100000) % 10];
    document.getElementById("kymppitonnit").innerHTML = numerot[Math.floor(pisteet / 10000) % 10];
    document.getElementById("tuhannet").innerHTML = numerot[Math.floor(pisteet / 1000) % 10];
    document.getElementById("sadat").innerHTML = numerot[Math.floor(pisteet / 100) % 10];
    document.getElementById("kympit").innerHTML = numerot[Math.floor(pisteet / 10) % 10];
    document.getElementById("ykköset").innerHTML = numerot[pisteet % 10];
}

function suljeSaavutus() {
    document.getElementById("saavutusLaatikko").style.display = "none";
}