const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');

// Using ancestor of the list items (listDiv) and relying on event bubbling to handle the events
listDiv.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.textContent = event.target.textContent.toUpperCase();
  };
});
listDiv.addEventListener('mouseout', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
  };
});


/* Example of event handler where clicking anywhere on the page will be logged into the console

document.addEventListener('click', (event) => {
  console.log(event.target);
});
*/

/* Loop through all list items and attach individual handlers to each item
for (let i = 0; i < listItems.length; i += 1) {
  listItems[i].addEventListener('mouseover', () => {
    listItems[i].textContent = listItems[i].textContent.toUpperCase();
  });
  listItems[i].addEventListener('mouseout', () => {
    listItems[i].textContent = listItems[i].textContent.toLowerCase();
  });
};
*/

toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  // both work the same just different way of changing text content on page
  // paragraph.textContent = input.value + ':';
  descriptionInput.value = "";
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
});

removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});


descriptionP.title = 'List Description';
