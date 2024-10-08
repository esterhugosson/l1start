// Provides object with nameday and name, for given name. empty array with no name day. 
// Api https://nameday.abalin.net, for document and examples: https://nameday.abalin.net/docs/ 

export class GetNameDay {

    constructor(name) {
        this.name = name
    }

    async getNameDay() {
        const url = new URL('https://nameday.abalin.net/api/V1/getname')

        const params = {
            "name": this.name,
            "country": "se"
        }

        Object.keys(params)
            .forEach(key => url.searchParams.append(key, params[key]))

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }

        try { 

            const response = await fetch(url, {
                method: 'GET',
                headers,
            })

            const result = await response.json()

            return result

        } catch(error) {

            console.error('Error with retrieving data from api: ', error)

        }


    }



}






