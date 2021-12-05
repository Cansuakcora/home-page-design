//! ----- TABLE SHOW/HIDE ----- //!
var btnSession1 = document.querySelector('#btn-agenda-1');
var btnSession2 = document.querySelector('#btn-agenda-2');
var btnSession3 = document.querySelector('#btn-agenda-3');

btnSession1.addEventListener('click', function () {
    // Button session class
    btnSession1.classList.add('active');
    btnSession2.classList.remove('active');
    btnSession3.classList.remove('active');

    // Table scheuld class
    document.querySelector('#agenda-1').classList.remove('hide');
    document.querySelector('#agenda-1').classList.add('show');

    document.querySelector('#agenda-2').classList.remove('show');
    document.querySelector('#agenda-2').classList.add('hide');

    document.querySelector('#agenda-3').classList.remove('show');
    document.querySelector('#agenda-3').classList.add('hide');
    // Table speakers class
    document.querySelector('#speakers-cards-1').classList.remove('hide');
    document.querySelector('#speakers-cards-1').classList.add('show');

    document.querySelector('#speakers-cards-2').classList.remove('show');
    document.querySelector('#speakers-cards-2').classList.add('hide');

    document.querySelector('#speakers-cards-3').classList.remove('show');
    document.querySelector('#speakers-cards-3').classList.add('hide');
});

btnSession2.addEventListener('click', function () {
    // Button session class
    btnSession2.classList.add('active');
    btnSession1.classList.remove('active');
    btnSession3.classList.remove('active');

    // Table scheuld class
    document.querySelector('#agenda-2').classList.remove('hide');
    document.querySelector('#agenda-2').classList.add('show');

    document.querySelector('#agenda-1').classList.remove('show');
    document.querySelector('#agenda-1').classList.add('hide');

    document.querySelector('#agenda-3').classList.remove('show');
    document.querySelector('#agenda-3').classList.add('hide');
    // Table speakers class
    document.querySelector('#speakers-cards-2').classList.remove('hide');
    document.querySelector('#speakers-cards-2').classList.add('show');

    document.querySelector('#speakers-cards-1').classList.remove('show');
    document.querySelector('#speakers-cards-1').classList.add('hide');

    document.querySelector('#speakers-cards-3').classList.remove('show');
    document.querySelector('#speakers-cards-3').classList.add('hide');
});

btnSession3.addEventListener('click', function () {
    // Button session class
    btnSession3.classList.add('active');
    btnSession1.classList.remove('active');
    btnSession2.classList.remove('active');

    // Table scheuld class
    document.querySelector('#agenda-3').classList.remove('hide');
    document.querySelector('#agenda-3').classList.add('show');

    document.querySelector('#agenda-2').classList.remove('show');
    document.querySelector('#agenda-2').classList.add('hide');

    document.querySelector('#agenda-1').classList.remove('show');
    document.querySelector('#agenda-1').classList.add('hide');

    // Table speakers class
    document.querySelector('#speakers-cards-3').classList.remove('hide');
    document.querySelector('#speakers-cards-3').classList.add('show');

    document.querySelector('#speakers-cards-1').classList.remove('show');
    document.querySelector('#speakers-cards-1').classList.add('hide');

    document.querySelector('#speakers-cards-2').classList.remove('show');
    document.querySelector('#speakers-cards-2').classList.add('hide');
});




//! ----- TABLE SHOW/HIDE ----- //!



// //! BROWSER CHECK //!
window.onload = function () {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        document.querySelector(".footer").classList.remove("flex-row-center");
    }
}
//! BROWSER CHECK //!