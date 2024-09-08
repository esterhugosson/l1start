
/**
 * Js file for L1 
 * @author Ester Hugosson
 */

// Listening when a name is entered and then presenting the result
import { GetNameDay } from './api.js'

document.addEventListener('DOMContentLoaded', () => {

    //Html element 
    const button = document.getElementById('submitButton')
    const input = document.getElementById('nameInput')
    const container = document.getElementById('container')
    const result = document.getElementById('result')
    const backButton = document.getElementById('backButton')
    //const resultcontainer = document.getElementById('resultcontainer')


    button.addEventListener('click', async() => {

        //Save name from input
        const name = input.value


        if(name) {

            const nameDayObject = await getDay(name)

            if (nameDayObject && nameDayObject['0'] && nameDayObject['0'].length > 0) {
                const namedayInfo = nameDayObject['0'][0]
                const { day, month, name: namedayName } = namedayInfo

                result.textContent = `For name: ${namedayName} is nameday ${day}/${month}`
            } else {
                result.textContent = `Hi, ${name}, no nameday found.`
            }


            container.style.display = 'none'


        } else {
            result.textContent = 'Please enter name.'
        }

        backButton.style.display = 'block'
        
    })

    backButton.addEventListener('click', () => {

        location.reload()

    })

})

async function getDay(name) {

    const day = new GetNameDay(name)

    const result = await day.getNameDay()

    console.log(result)

    return result


}