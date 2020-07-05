// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:

const main = document.querySelector('main')

function printKataHeading (parentElement, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA " + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}

printKataHeading(main, 1)
const isActive = users.filter(user => user.isActive === true)
printObject(main, isActive)


function printKataHeading (parentElement, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA " + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}
printKataHeading(main, 2)
const emails = users.map(user => user.email) 
printObject(main, emails )

function printKataHeading (parentElement, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA " + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}
printKataHeading(main, 3)
const ovationUsers = users.some(user => user.company === 'OVATION')
printObject(main, ovationUsers)

function printKataHeading (parentElement, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA " + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}
printKataHeading(main, 4)

const firstUser38 = users.find(user => user.age = 38)
printObject(main, firstUser38)


function printKataHeading (parentElement, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA " + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}
printKataHeading(main, 5)
const firstActiveUser = users.filter(user => user.isActive === true).find(user => user.age > 38)
printObject(main, firstActiveUser )
function printKataHeading (parentElement, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA " + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}
printKataHeading(main, 6)
const zencoBalences = users.filter(user => user.company == 'ZENCO').map(user => user.balance)
printObject(main, zencoBalences)

function printKataHeading (parentElement, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA " + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}
printKataHeading(main, 7)
const fugiatAges = users.filter( user => user.tags.includes('fugiat')=== true).map(user => user.age)
printObject(main, fugiatAges )