// //* #1
// //! -> Выводит числа по порядку возрастания 
// const num = [1, 34, 42, 23, 16, 4, 3, 20, 89]
// num.sort((a, b) => a-b)
// console.log(num)

// //* 2
// //! -> Надо найти используя методы массивов индекс элемента с определенным значением и удалить его из массива
// let str = ['Ronaldo', 'Messi', 'Pele', 'Maradona', 'Neymar']
// let searchIndex = str.indexOf('Neymar')
// searchIndex !== -1 && str.splice(searchIndex, 4)
// console.log(str) 

// //* 3
// //! Надо вывести возрасты user по возрастанию 
// let users = [
//   {surname: 'Beka', age: 24 } ,
//   {surname: 'Doni', age: 28 } ,
//   {surname: 'Dosi', age: 21 } ,
//   {surname: 'Danya', age: 19 } ,
//   {surname: 'Bayta', age: 23 } ,
// ]
// users.sort((a, b) => a.age - b.age)
// console.log(users)

// //* 4
// //! Надо найти сумму элементов, расположенных на четных позициях
// let num1 = [12, 45, 43, 23, 28, 1, 34, 30]
// const sumEvenPositions = num1.reduce((acc, curr, index) => {
//   if (index % 2 === 0) {
//     return acc + curr
//   }
//   return acc
// }, 0)
// console.log(sumEvenPositions)

// //* 5
// //! Надо найти объекты в массиве которые начинаются на букву О
// let fruits = ["apple", "banana", "orange", "pear", "kiwi"]
// let count = 0
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].startsWith('o')) {
//     count++
//   }
// }
// console.log(count)

// //* 6
// //! Надо найти сумму всех обьектов 
// let products = [
//   { name: "apple", price: 5 },
//   { name: "banana", price: 6 },
//   { name: "orange", price: 8 },
//   { name: "pear", price: 7 }
// ]
// let total = products.reduce((sum, product) => sum + product.price, 0)
// console.log(total)

// //* 7
// //! Надо найти в массиве макс и мин числа
// let numbers = [5, 2, 8, 1, 4]
// let max = Math.max(...numbers)
// let min = Math.min(...numbers)
// console.log(max)
// console.log(min)

// //* 8
// //! Надо объеденить все элементы в массиве в одну строку
// const stringArray = ["Hello", "world", "from", "ChatGPT"]
// const joinedString = stringArray.join(" ")
// console.log(joinedString)

// //* 9
// //! Надо найти средний возраст элементов в массиве
// const peopleArray = [
//   { name: "Дони", age: 25 },
//   { name: "Доси", age: 15 },
//   { name: "Даня", age: 20 }
// ]
// const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0)
// const averageAge = totalAge / peopleArray.length
// console.log(averageAge)

// //* 10
// //! Создайте массив чисел. Используя методы массива, создайте новый массив, содержащий квадраты элементов исходного массива
// let numberArray = [1, 2, 3, 4, 5]
// let squaredArray = numberArray.map((num) => num ** 2)
// console.log(squaredArray)
