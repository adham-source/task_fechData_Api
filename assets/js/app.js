// Created function to create element
const createNewElement = (parent, ele, classes = false, text = false) => {
    newElement = document.createElement(ele)
    parent.appendChild(newElement)

    if (classes) newElement.className = classes
    if (text) newElement.textContent = text

    return newElement
}

// Used function to create table
const insertTableEl = document.querySelector('#insertTable')
const tableTag = createNewElement(insertTableEl, 'table', 'table my-3')
const theadTable = createNewElement(tableTag, 'thead')
const theadTr = createNewElement(theadTable, 'tr')

// Create table body
const tbodyTable = createNewElement(tableTag, 'tbody')

const storeDataFunction = async(store) => {

    let storeDataFromApi = await fetch('https://api.covid19api.com/summary')

    let convetData = await storeDataFromApi.json()

    store(convetData)
}

let titleData = []

storeDataFunction((data) => {
    let storeToShow = data.Countries

    storeToShow.forEach((ele, index) => {
        if (index == 0) {
            for (let d in ele) {
                titleData.push(d)
                if (d != 'ID' && d != 'Premium')
                    theadTrTh = createNewElement(theadTr, 'th', false, d)
            }
        }

        tbodyTr = createNewElement(tbodyTable, 'tr')
        titleData.forEach(title => {
            if (title != 'ID' && title != 'Premium')
                tbodyTrTd = createNewElement(tbodyTr, 'td', false, ele[title])
        })

    })

})


















/*********************************
SESSION 1  NTI 6 - 6 - 2021
**********************************/
// var x = 1
// var x = 2
// console.log(x) // 2

// let y = 1
// let y = 2
// console.log(y) // SyntaxError: Identifier 'y' has already been declared

// const z = 1
// const z = 1
// console.log(z) // SyntaxError: Identifier 'z' has already been declared

// let x = 5
// if(true) {
//     let x = 10
// }

// console.log(x) // 5

// let i = 0
// for (; ;) {
//     i = i + 1
//     if (i > 10) break
//     console.log(`numbers are : ${i}`)
// }


// x = 5 
// console.log(typeof x)

// let i = 0
// for( ; ; ){
//     i++
//     if(i > 5) break
//     console.log(`${i}`)
// }

// f1()
// function f1() {
//     let info = {
//         user: 'any user',
//         age: 22,
//         fav: 'read',
//         address: ['cairo', 'alex', 'el-wady']
//     }
//     // console.table([1, true, 'text'])
//     console.table(info)
// }
// f1()


// // f2() // Cannot access 'f2' before initialization
// let f2 = function (name = 'My name') {
//     console.log(name) 
// }
// f2()

// // f3() // Cannot access 'f2' before initialization
// let f3 = _ => console.table([1,2,3,4,5].toString())
// f3()

// filter, find, forEach, indexOf, sort ....

// // array.forEach(element => {});

// let users = ['marwa', 'noura', 'ahmad', 'noran', 'hesham']
// let nums = [1, 2, 3, 4, 5, 6]

// users.forEach((user, index) => {
//     console.log(`${index} => ${user}`)

// })

// let filterData = users.filter(user => {
//     // return user.search(/h/i)
//     return user.includes('h')
// })
// console.log(filterData)

// console.log(nums)
// // let s = 0
// nums.forEach((value, index) => {

//     nums[index] = value + 10 
//     console.log(nums[index])
//     // s = s + value
//     // console.log(s)
// })
// console.log(nums)

// let student = {
//     name: 'ahmad',
//     age: parseInt(prompt(`Enter your age `)),
//     position: 'programming',

//     calcAgeOfDayes : function () {
//         return this.age * 365
//     }
// }
// console.table(student)

// for(let info in student) {
//     info === 'calcAgeOfDayes' ?
//         console.log(info, student[info]()) :
//         console.log(info, student[info])

// }

// console.log('-'.repeat(20))

// let keys = Object.keys(student)
// keys.forEach(value => {
//     console.log(value, student[value])
// })

// # - Ex 
/*
    setUser(name, age, salary)
    users = [
        {
            name: name,
            age: age,
            salary: salary
        }
    ]
*/

// let users = []

// let checkEmpty = (k, v) => {
//     while (i) {
//         v = prompt(`Can't empty please enter value for ${k}`)
//     }
//     return v
// }

// let users = []
// let validateNumber = (key, value) => {

//     while(isNaN(Number(value))) {
//         value = prompt(`Please enter valid data for ${key}`)
//     }

//     value = Number(value)
//     return value
// }

// let setUsers = function () {
//     let insertUsers = {
//         name: null,
//         age: null,
//         salary: null
//     }

//     let infos = Object.keys(insertUsers)

//     infos.forEach(info => {
//         insertUsers[info] = prompt(`Enter the ${info}`)
//         if(info === 'age' || info === 'salary') {
//             insertUsers[info] = validateNumber(info, insertUsers[info])
//         }
//         // if(info == 'age' && insertUsers[info] == 0) {
//         //     insertUsers[info] = checkEmpty(info, insertUsers[info])
//         // }
//     })
//     users.push(insertUsers)

//     console.log(users)

// }
// setUsers()
// setUsers()

// let users = []
// let userSetData = (firstName, age, salary) => {

//     user = {
//         name: firstName,
//         age: age,
//         salary: salary,
//     }

//     users.push(user)
//     console.log(users)
// }
// userSetData('adham', 33, 345)
// userSetData('as', 23, 32423)


// 165




// let vector = {}

// vector[0] = true
// vector[1] = 1234
// vector[2] = 'any thing'

// console.log(vector)




// let users = []

// let insertData = function () {
//     let info = {
//         name: null,
//         fav : null,
//         address : null
//     }

//     let keys = Object.keys(info)

//     keys.forEach(ele => {
//         ele = prompt(`enter your ${ele} `)
//         users.push(ele)
//     })

//     // return keys
//     console.table(`The information are ${users}`)

// }

// insertData()




// let users = {
//     name : 'adham',
//     balance: 1000,

//     taxes: function () {
//         return `${this.balance * 10 / 100}`
//     },

//     newBalance: function (addBalance) {
//         return `${this.balance += addBalance}`
//     },

//     resetBalaneAndTaxes: function () {
//         return `The balance is : ${this.balance = 0} 
//             and taxes are : ${this.taxes = 0}`
//     }
// }


// console.log(users.newBalance(1000))
// console.log(users.taxes())
// console.log(users.resetBala

/*************************************************************** */

// Get data from local storage
// const getAllTask = () => {
//     let allTasks = JSON.parse(localStorage.getItem('tasks')) || []
//     return allTasks
// } 

// // Save data in local sotrage
// const setAllTask = (allTasks) =>  {
//     localStorage.setItem('tasks', JSON.stringify(allTasks))
// }


// // Add new tasks 
// const addNewTasks = (name, type) => {
//     let infoTask = {
//         id: new Date().getTime(),
//         name: name,
//         type: type
//     }

//     allTasks = getAllTask()
//     allTasks.push(infoTask)
//     setAllTask(allTasks)
// }

// // addNewTasks('todo App', 'medium')
// // addNewTasks('Calc', 'hard')
// // addNewTasks('sliders', 'medium')

// // Show tasks 
// const displyTasks = () => {
//     allTasks = getAllTask()
//     allTasks.forEach(task =>
//         console.log(`id : ${task.id} name : ${task.name} type ${task.type}`)
//         // console.table(task)
//     )
//     // for(task in allTasks) console.log(task, allTasks[task])
// }


// // Delete tasks
// const deleteTasks = (id) => {
//     // Find task by index id
//     numberOfIndex = allTasks.findIndex(index => index.id == id)
//     if(numberOfIndex == -1) return console.log(`return`)
//     allTasks = getAllTask()    
//     allTasks.splice(numberOfIndex, 1)
//     setAllTask(allTasks)
//     // return numberOfIndex
// }
// displyTasks()
// deleteTasks()
// displyTasks()

// // Edit tasks
// // const editTasks = (id, newName, newType) => {
// //     numberOfIndex = allTasks.findIndex(index => index.id == id)
// //     allTasks = getAllTask()
// //     allTasks[numberOfIndex].name = newName
// //     allTasks[numberOfIndex].type = newType
// //     setAllTask(allTasks)
// // }
// // editTasks(1623149655222, 'Calculator', 'meduim')
// // displyTasks()


// // // clousers return functions 

// // const sumNums =  (num) => {
// //     return {
// //         num,
// //         addNum(N) {return num += N},
// //         subNum(N) {return num -= N}
// //     }
// // }

// // let number = sumNums(4)
// // console.log(number.addNum(4))
// // console.log(number.subNum(2))
// // console.log(number.num)


// // console.log('a')
// // setTimeout(() => {
// //     console.log('b')
// // }, 2000)
// // console.log('c')
// // callback


// // promises


// // async wait


// // then catch

// // testing function promise
// const printData = (title, content) => {
//     let storeData = new Promise((res, rej) => {
//         setTimeout(() => {
//             if (title !== '' && content == '') {
//                 res('Good')
//             } else {
//                 rej('Error')
//             }
//         }, 1000)
//     })
//     return storeData
// }

// showData = async () => {
//     try {
//         storeData = await printData('', '')
//         console.log(storeData)
//     }
//     catch(even) {
//         console.log(even)
//     }
// }
// // showData()