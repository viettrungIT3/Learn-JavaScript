var quoctes = [
    {
        quocte: 'Life is about making an impact, not making an income.',
        author:'Kencin Kruse'
    },
    {
        quocte: 'Học, học nữa, học mãi',
        author:'Lê nin'
    },
    {
        quocte: 'We know what are, but know not what we may be.',
        author:'William Shakespeare'
    },
    {
        quocte: 'Believe you can and you\'re halfway there',
        author:'Theodore Roosevelt'
    },
    {
        quocte: 'If you can dream it, you can do it.',
        author:'Walt Disney'
    }
]

function makeRandomNumber(range) {
    return Math.floor(Math.random() * range);   // 0 -> range
}

function getQuocte() {
    return quoctes[makeRandomNumber(quoctes.length)];
}

function makeQuocte() {
    var quocte = getQuocte();

    var eleQuocte = document.getElementById('quocte');
    var eleAuthor = document.getElementById('author');

    eleQuocte.innerText = quocte.quocte;
    eleAuthor.innerText = quocte.author;
}

window.onload = makeQuocte;