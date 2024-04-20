// Text process api

let company = ["Google", "Microsoft", "Amazon", "Apple", "Samsung", "Xiaomi", "Motorola", "GitHub", "Facebook", "Meta", "Alphabet Inc.", "Robox Inc.", "Mojang", "IBM", "Intel", "Netflix", "Ciscle", "Oracle", "Dell", "NVIDIA", "Adobe", "Twitter", "Spotify", "Qualcomm", "SAP SE", "Salesforce", "Uber", "Airbnb"] // Not all company will be list here, because is unknown
let address = /"\D*\d*"/gm

function textProcess(text) {
    let companys = []
    let add = []
    for (word in text.split(" ")) {
        if (company.includes(word)) {
            companys.push(word)
        } else if (word.matchs(address)) {
            add.push(word)
        }
    }
    return {
        companys: companys,
        address: add
    }
}
