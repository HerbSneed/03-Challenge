# Herb Sneed: Password Generator

This is a password generator that creates a unique password based on the user's preferences. 

## Operation
The user needs a new, secure password.

WHEN the user clicks the  RED button to generate a password,
THEN the user is presented with a series of prompts for password criteria.

WHEN prompted for password criteria,
THEN the user selects which criteria to include in the password.

WHEN prompted for the length of the password,
THEN the user chooses a length of at least 8 characters and no more than 128 characters.

WHEN entering a length less than 8 characters or more than 128 characters,
THEN the user is prompted to choose again.

WHEN asked for character types to include in the password,
THEN the user confirms whether or not to include lowercase, uppercase, numeric, and/or special characters.

WHEN the user answers each prompt,
THEN the user's input should be validated and at least one character type should be selected.

WHEN all prompts are answered,
THEN a password is generated that matches the selected criteria.

WHEN the password is generated,
THEN the password is written to the page.

## CODE

### HTML
HTML was used to layout the backbone of the project.

### CSS
CSS was used to style the page.

### JavaScript
JavaScript "if/else" statments were used to validate the users character choices.  Once the choices were made, a for loop was introduced to randomize the concated string of characters (see JavaScript comments). 

## We hope you find this application useful



![Screenshot 2023-04-05 at 4 55 40 PM](https://user-images.githubusercontent.com/105166208/230213001-0ce1c279-d9f8-413d-aed2-63eb1bfc3c91.png)




