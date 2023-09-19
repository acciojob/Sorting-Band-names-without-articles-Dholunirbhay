//your code here
let bandNames = ['The Virupaksha Temple', 'a Victoria Memorial', 'an Tajmahal'];

function sortBandNames(bandNames) {
  const sortedBandNames = bandNames.slice().sort((a, b) => {
    // Function to remove articles and trim the names
    const removeArticle = name => name.replace(/^(a|an|the)\s+/i, '').trim();

    const nameA = removeArticle(a).toLowerCase();
    const nameB = removeArticle(b).toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return sortedBandNames;
}

// Sort the band names without articles
let sortedBandNames = sortBandNames(bandNames);

// Display the sorted band names inside the ul with id 'band'
const bandList = document.getElementById('band');

sortedBandNames.forEach(bandName => {
  const listItem = document.createElement('li');
  listItem.textContent = bandName;
  bandList.appendChild(listItem);
});





