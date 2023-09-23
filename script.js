//your code here

let bandNames = ['The Beatles', 'Rolling Stones', 'Led Zeppelin', 'The Who', 'Aerosmith', 'Nirvana'];

// Remove articles ('a', 'an', 'the') from the band names
function removeArticles(name) {
    return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names in lexicographic order without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element to insert the list items
const ulElement = document.getElementById('band');

// Create and append list items for each band name
bandNames.forEach(name => {
    const liElement = document.createElement('li');
    liElement.textContent = name;
    ulElement.appendChild(liElement);
});