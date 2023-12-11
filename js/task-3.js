// Об’єкт profile описує профіль користувача на ігровій платформі.
// У його властивостях зберігається ім’я профілю username
// та кількість активних годин playTime, проведених у грі.

// const profile = {
//     username: "Jacob",
//     playTime: 300,
// };

// Доповни об’єкт profile методами для роботи з його властивостями.
// Метод changeUsername(newName) повинен приймати рядок(нове ім’я) в параметр newName
// та змінювати значення властивості username на нове.Нічого не повертає.
// Метод updatePlayTime(hours) повинен приймати число(кількість годин) у параметр hours
// та збільшити на нього значення властивості playTime.Нічого не повертає.
// Метод getInfo() має повертати рядок формату
//     < Username > has < amount > active hours!, де < Username > — це ім’я профілю,
//     а < amount > — кількість ігрових годин.


// function filterArray(numbers, value) {//* Оголошуємо функцію*/

//   //* Створюємо порожній масив для чисел/
//   let resultArray = [];

//   //* Проходимо циклом по кожнму елементу масиву/
//   for (let i = 0; i < numbers.length; i++) {

//     //*Перевірка, чи поточний елемент більший за задане значення
//     if (numbers[i] > value) {

//       //* Додаємо поточне число до масиву
//       resultArray.push(numbers[i]);
//     }
//   }
//   //* Повертаємо масив чисел*/
//   return resultArray;
// }

// //~ (i < numbers.length;) каже, що ми хочемо ітерувати кожен елемент масиву numbers, а не порівнювати його зі значенням value.
// //~Умова (i < numbers.length) означає, що цикл буде продовжуватися, доки i менше довжини масиву numbers.
// //~ Це дозволяє нам ітерувати кожен елемент масиву, незалежно від його значення.
// //~ якщо написати (for (let i = 0; i > value; i++) -(числа numbers, які більші за значення value)=>
// //~замість (for (let i = 0; i < numbers.length; i++))
// //~ то цикл не буде ітерувати кожен елемент масиву numbers, а буде перевіряти, чи є значення i більшим за value.
// //~Це може призвести до того, що цикл не буде виконуватися жодного разу, якщо value більше, ніж довжина масиву numbers.
// //~Якщо value менше, ніж довжина масиву numbers, то цикл буде виконуватися, але не для кожного елемента масиву numbers.



// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"