function removeItem(beach) {
  // Get the current beach
  const target = beach.currentTarget;

  // Go to the parent and remove the selected row
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  parent.removeChild(row);
}

function addItem() {
  // Getting the respective Input and Values from the HTML
  let newBeachNameInput = document.getElementById("beach-name");
  let newBeachNameValue = newBeachNameInput.value;

  // Getting the respective Input and Values from the HTML
  let newBeachWeatherInput = document.getElementById("weather");
  let newBeachWeatherValue = newBeachWeatherInput.value;

  // Getting the respective Input and Values from the HTML
  let newBeachTideInput = document.getElementById("tide");
  let newBeachTideValue = newBeachTideInput.value;

  // Getting the respective Input and Values from the HTML
  let newBeachExperienceInput = document.getElementById("experience");
  let newBeachExperienceValue = newBeachExperienceInput.value;

  // Creating a new element (row) with the Information the user submitted
  const newTableRow = document.createElement("tr");
  newTableRow.className = "wave";
  newTableRow.innerHTML = `
     <td class="name">
            <span>${newBeachNameValue}</span>
          </td>
          <td class="weather"><span>${newBeachWeatherValue}</span></td>
          <td class="tide-status">
            <span>${newBeachTideValue}</span>
          </td>
          <td class="experience"><span>${newBeachExperienceValue}</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;

  // Adding the new Row to our document
  const parent = document.querySelector("#wave-list tbody");

  parent.appendChild(newTableRow);

  // Creating a button to remove the selected Beach
  const removeBtn = newTableRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeItem);

  // Reseting the inputs so the User can add more Beaches
  newBeachNameInput.value = "";
  newBeachWeatherInput.value = "";
  newBeachTideInput.value = "";
  newBeachExperienceInput.value = "";
}

window.addEventListener("load", () => {
  // Get both the Create and Delete buttons from the html
  const createBtn = document.getElementById("create");
  const removeBtns = document.querySelectorAll(".btn-remove");

  // Loop to add the removeItem function to each button
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener("click", removeItem);
  }

  // Check if the button exists, if so, add the function to add a Beach
  if (createBtn) {
    createBtn.addEventListener("click", addItem);
  }
});
