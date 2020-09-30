/* 
downloadAndCopy.js:
Ecrivez un programme qui télécharge une page d'un site internet puis la copie dans un fichier. L'url du site ainsi que le nom du ficher où sera copié la page téléchargée devront être passés en arguments de la ligne de commande.
*/
import axios from 'axios'
import fs from 'fs/promises'

const downloadAndCopy = async (url, file) => {
    let get = await axios.get(url)
    let reponse = await fs.writeFile(file, response.data)
    return reponse
}

downloadAndCopy('https://www.google.com', './index.html')
