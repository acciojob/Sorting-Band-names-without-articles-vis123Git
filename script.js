//your code here

// Function to remove articles from a string and return the cleaned string
function removeArticles(name) {
  // List of articles to remove
  const articles = ['a', 'an', 'the'];

  // Split the name into words
  const words = name.split(' ');

  // Remove articles from the beginning of the name
  while (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }

  // Join the words back into a string
  return words.join(' ');
}

// Sort the band names without articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

// Get the ul element by its id
const bandList = document.getElementById('band');

// Iterate over the sorted band names and create list items
bandNames.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});