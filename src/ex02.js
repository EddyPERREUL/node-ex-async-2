/*
faster.js:
Ecrivez un programme qui determine lequel de ces 4 sites répond le plus rapidement aux rêquetes http

https://www.facebook.com
https://www.amazon.com
https://www.apple.com
https://www.google.com
*/

import axios from 'axios'

let faster = await Promise.race([
    axios.get('https://www.facebook.com').then(() => 'facebook'),
    axios.get('https://www.amazon.com').then(() => 'amazon'),
    axios.get('https://www.apple.com').then(() => 'apple'),
    axios.get('https://www.google.com').then(() => 'google'),
]).catch((err) => {
    console.error(err)
})
console.log(faster)
