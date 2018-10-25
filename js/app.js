//Tworzenie funkcji
var prevPicture = document.querySelector(".arrowLeft");
var nextPicture = document.querySelector(".arrowRight");
var table = document.querySelector(".introUl");


var imgIndex = 0;

//Podpinanie eventu do buttonów

nextPicture.addEventListener("click", function(el){
    el.preventDefault();

    //pobieramy obrazki
    var image = document.querySelector(".visible");

    // Zwiększ zmienną trzymającą indeks obrazka
    imgIndex += 1;

    //usuwamy klasę visible dla poszczególnego obrazka
    image.classList.remove("visible");

    //pobieramy wszystkie li, w których znajdują się obrazki
    var nextImg = table.querySelectorAll(".img");

    //jeżeli index jest większy lub równy ostatniemu obrazkowi
    if (imgIndex >= nextImg.length - 1) {
        //wtedy index obrazków równa się zero i wraca do początku
        imgIndex = 0;
    }
    //dodajemy klasę "visible" do kolejnego obrazka, który pojawił się  po wciśnijęciu next button
    nextImg[imgIndex].classList.add("visible");
});


//dodajemy event klik na prev button
prevPicture.addEventListener("click", function(e){
    e.preventDefault();

    //ściągamy obrazi
    var image = document.querySelector(".visible");

    //zmniejszamy zmienną, która trzyma obrazki
    imgIndex -= 1;

    //z poszczególnego obrazka wykasowujemy klasę "visible"
    image.classList.remove("visible");

    //pobieramy wszystkie li, które posiadają obrazki
    var nextImg = table.querySelectorAll(".img");

    //jeżeli index z obrazkami jest mniejszy niż zero
    if (imgIndex < 0 ) {
        //wtedy index musi równać się ostatniemu obrazkowi z listy
        imgIndex = nextImg.length - 1;    //na opak, jak wyżej
    }
    nextImg[imgIndex].classList.add("visible");
});



