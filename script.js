let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Nirvana'];
function sortBandNames(names) {
  const articles = ['a', 'an', 'the'];
  function customSort(a, b) {
    const aName = a.toLowerCase();
    const bName = b.toLowerCase();
    for (const article of articles) {
      if (aName.startsWith(article)) {
        aName = aName.slice(article.length).trim();
      }
      if (bName.startsWith(article)) {
        bName = bName.slice(article.length).trim();
      }
    }
    return aName.localeCompare(bName);
  }
  return names.sort(customSort);
}

const sortedBandNames = sortBandNames(bandNames);

// Get the ul element by id
const ulElement = document.getElementById('band');

// Create li elements and append them to ul
sortedBandNames.forEach((name) => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});
