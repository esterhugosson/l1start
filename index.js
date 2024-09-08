
/**
 * Js file for L1 
 * @author Ester Hugosson
 */

// Listening when a name is entered and then presenting the result

document.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('submitbutton')
    const input = document.getElementById('nameInput')
    const container = document.getElementById('container')
    const result = document.getElementById('result')

    button.addEventListener('click', () => {
        const name = input.value

        result.textContent = `Welcome, ${name} `
    })

})