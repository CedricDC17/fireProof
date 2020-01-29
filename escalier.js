console.log('Escalier.js');

let linesNumber = 18;
let j = 1
for (let i = linesNumber; i != 0; i--) {

    let espace = i - 1
    let star = j
    j++
    for (espace; espace != 0; espace--) {
        process.stdout.write(` `)
    }

    for (star; star != 0; star--) {
        process.stdout.write(`*`)
    }

    process.stdout.write(`\n`)
}