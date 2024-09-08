
/**
 * Js file for L1 
 * @author Ester Hugosson
 */

// Listening when a name is entered and then presenting the result

document.addEventListener('DOMContentLoaded', () => {

    //Html element 
    const button = document.getElementById('submitButton')
    const input = document.getElementById('nameInput')
    const container = document.getElementById('container')
    const result = document.getElementById('result')

    button.addEventListener('click', () => {

        //Save name from input
        const name = input.value


        if(name) {
            result.textContent = `Welcome, ${name} `
            container.style.display = 'none'
        } else {
            result.textContent = 'Please enter name.'
        }
        
    })

})