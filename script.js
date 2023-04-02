//your JS code here. If required.
// Select elements
const gridContainer = document.querySelector('#grid-container');
const blockIdInput = document.querySelector('#block_id');
const colorInput = document.querySelector('#colour_id');
const changeButton = document.querySelector('#change_button');
const resetButton = document.querySelector('#reset_button');

// Add event listeners
changeButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', resetColors);

// Functions
function changeColor() {
  const blockId = blockIdInput.value;
  const color = colorInput.value;

  // Reset all grid items to transparent
  const gridItems = gridContainer.querySelectorAll('.grid-item');
  gridItems.forEach(item => item.style.backgroundColor = 'transparent');

  // Change background color of specified block id
  const block = document.querySelector(`#${blockId}`);
  if (block) {
    block.style.backgroundColor = color;
  } else {
    alert('Invalid block ID');
  }
}

function resetColors() {
  // Reset all grid items to transparent
  const gridItems = gridContainer.querySelectorAll('.grid-item');
  gridItems.forEach(item => item.style.backgroundColor = 'transparent');
}

