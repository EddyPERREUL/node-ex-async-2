/* 
downloadAndCopy.js:
Ecrivez un programme qui télécharge une page d'un site internet puis la copie dans un fichier. L'url du site ainsi que le nom du ficher où sera copié la page téléchargée devront être passés en arguments de la ligne de commande.
*/
import axios from 'axios'
import fs from 'fs/promises'

let htmlContent = (await axios.get(process.argv[3])).data

await fs.writeFile(process.argv[2], htmlContent)

console.log(
    `Le code html ${process.argv[3]} à bien été copié dans le chemin suivant ${process.argv[2]}`
)
