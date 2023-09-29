let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function sortBandNames(names) {
  const articles = ['a', 'an', 'the'];
  function customSort(a, b) {
    let aName = a.toLowerCase();
    let bName = b.toLowerCase();
    for (let article of articles) {
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
const sortedBandNames = sortBandNames(touristSpots);
const ulElement = document.getElementById('band');
sortedBandNames.forEach((name) => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});
