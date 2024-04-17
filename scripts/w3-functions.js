let firstName = "Rusell";
let lastName = "Nelson";

function fullNameDeclaration(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const fullNameAnonymousExpression = function(first, last){
    return `${first} ${last}`
}

const fullNameArrow = (first, last) => `${first} ${last}`

const textElement = document.getElementById('fullName');
textElement.innerHTML = fullNameDeclaration(firstName, lastName)