import fs from 'fs'
import path from 'path'
import internal from 'stream'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'lepesek.txt')

let content = ''
try {
    content = fs.readFileSync(filePath, 'utf8')
} catch(err) {
    console.log(err)
}
console.log(content)

content = content.split(",")
console.log(content)
let lepesek = 0;
let pozicio = 0;
let visszalepes = 0
let tombpoz = []

for (let i = 0 ;i<content.length;i++) {
    lepesek = parseInt(content[i])
    pozicio += lepesek
    if (pozicio % 10 == 0) {
        pozicio -= 3
        visszalepes++
    }
    tombpoz.push(pozicio)
}

console.log("1. feladat")
for (let i = 0;i < tombpoz.length; i++) {
    console.log(tombpoz[i] + " ")
}

console.log("2. feladat")
console.log(visszalepes + " db visszalépés")

console.log("3. feladat")
if(pozicio >= 45) {
    console.log("Befejezte a játékot")
}
else { console.log("Játékos abbahagyta")}

