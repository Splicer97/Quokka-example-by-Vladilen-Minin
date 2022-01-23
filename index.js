//in command palette:
//Quokka.js: Start on Current File
const num = 42
const num2 = num ** 2
const num3 = Math.random()
const num4 = Math.ceil(Math.random() * 10)
console.log('num4 :>> ', num4);
const date = new Date().toDateString()	//?
date
const locale = 'ru-RU'
const options = {
	day: "numeric",
	year: "numeric",
	month: "short"
}
const dateFormat = new Intl.DateTimeFormat(locale, options).format() //?
dateFormat

const fibonacci = [1, 1, 2, 3, 5, 8]
const nextFib = fibonacci.concat([13])
nextFib
const next = [...nextFib, 21]
next

const rules = next.every(n => typeof n === 'number')
rules

//? work in pro version

const index = next.findIndex(n => n === 5)
index