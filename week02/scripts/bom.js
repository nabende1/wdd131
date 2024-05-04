const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Filled in the blank to reference the HTML element that is an unordered list element.

button.addEventListener('click', function() {
    // Check if input is not blank
    if (input.value.trim() !== '') {
        // Create list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;

        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
            // Remove the li element when delete button is clicked
            li.remove();
        });

        // Clear input field
        input.value = '';

        // Set focus to input field
        input.focus();
    } else {
        // If input is blank, provide a message or do nothing and return focus to input field
        input.focus(); // Focus on input field
        // You can provide a message like this:
        // alert('Please enter a Book and Chapter.');
    }
});
