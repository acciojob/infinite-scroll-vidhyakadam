//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");
  let nextPage = 2; // Initialize the next page to load

  // Function to add more list items
  function loadMoreItems() {
    for (let i = 1; i <= 2; i++) { // Add 2 more items at a time
      const listItem = document.createElement("li");
      listItem.textContent = "List item " + nextPage;
      infiList.appendChild(listItem);
      nextPage++;
    }
  }

  // Add about 10 list items by default
  for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "List item " + i;
    infiList.appendChild(listItem);
  }

  // Add a scroll event listener to trigger loading more items
  infiList.addEventListener("scroll", function () {
    if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
      loadMoreItems();
    }
  });
});

