"use strict";

/* let user = {name: 'Ivan'}; // Создаём объект 'user' с ключом 'name' и значением 'Ivan'

user = null; // Присваиваем переменной 'user' значение 'null', что означает отсутствие ссылки на объект

console.log(user); */ // Выводим в консоль значение переменной 'user', которое теперь равно 'null'



/* let user = {name: 'Ivan'};  // Создаём объект 'user' с ключом 'name' и значением 'Ivan'
const arr = [user];  // Создаём массив 'arr', в котором сохраняем ссылку на объект 'user'
user = null;  // Присваиваем переменной 'user' значение 'null', что разрывает ссылку на объект

console.log(user);  // Выводим значение переменной 'user' в консоль, которая теперь равна 'null'
console.log(arr[0]); */  // Выводим первый элемент массива 'arr', который всё ещё ссылается на исходный объект



/* let user = { name: 'Ivan' }; // Создаём объект user с полем name, равным 'Ivan'

let map = new Map(); // Создаём новый экземпляр Map для хранения пар "ключ-значение"
map.set(user, 'data'); // Добавляем в Map пару: ключ - объект user, значение - строка 'data'

user = null; // Устанавливаем переменную user в null, теряя ссылку на объект

console.log(map.keys()); */ // Пытаемся вывести итератор ключей из Map. Нужна дополнительная обработка для правильного вывода



// WeakMap — это коллекция пар "ключ-значение", где ключами могут быть только объекты, и они хранятся с слабыми ссылками. Это позволяет автоматически удалять объекты из памяти, когда на них больше нет ссылок

// Первый пример с юзерам:

/* let user = {name: 'Ivan'}; // Создаём объект user с свойством name

let map = new WeakMap(); // Создаём новый WeakMap для хранения данных
map.set(user, 'data'); // Добавляем пару ключ-значение (user, 'data') в WeakMap

user = null;  // Удаляем ссылку на объект user, он теперь может быть удалён сборщиком мусора

console.log(map.has(user)); */ // Проверка наличия ключа user в WeakMap, вернёт false, так как user был присвоен null



// Второй пример с чатами:

/* let cache = new WeakMap();  // Создаём новый WeakMap для хранения кэшированных данных

function cacheUser(user) {  // Функция для кэширования данных пользователя
    if (!cache.has(user)) {  // Если ключ (пользователь) ещё не сохранён в кэше
        cache.set(user, Date.now());  // Сохраняем текущее время в качестве значения для этого пользователя
    }
    return cache.get(user);  // Возвращаем значение, связанное с пользователем (время добавления)
}

let lena = { name: 'Elena' };  // Создаём объект для пользователя Лены
let alex = { name: 'Alex' };   // Создаём объект для пользователя Алекса

cacheUser(lena);  // Добавляем Лину в кэш
cacheUser(alex);  // Добавляем Алекса в кэш

lena = null;  // Обнуляем ссылку на Лину, теперь она может быть удалена из памяти

console.log(cache.has(lena));  // Проверка наличия Лины в кэше, вернёт false, так как ссылка на Лину удалена
console.log(cache.has(alex)); */  // Проверка наличия Алекса в кэше, вернёт true, так как ссылка на Алекса остаётся



// WeakSet - это коллекция уникальных объектов, где объекты хранятся с слабыми ссылками. Это значит, что если на объект больше не существует ссылок (кроме как в коллекции WeakSet), он будет автоматически удалён сборщиком мусора

// 1. Хранит только объекты (не примитивные значения).
// 2. Ссылается на объекты слабыми ссылками, что позволяет автоматически удалять объекты из памяти, когда они больше не используются
// 3. Не имеет методов для перебора элементов, таких как forEach, потому что объекты могут быть удалены в любой момент
// 4. имеет свойства add, has, delete

// Пример:

// Массив сообщений
let messages = [
    {text: 'Hello', from: 'John'},  // Сообщение от John
    {text: 'Hello', from: 'Alex'},  // Сообщение от Alex
    {text: '.....', from: 'M'},     // Сообщение от M
];

// Создаём новый WeakSet для отслеживания прочитанных сообщений
let readMessages = new WeakSet();

// Добавляем первое сообщение в WeakSet
readMessages.add(messages[0]);  // messages[0] добавляется в readMessages
// Добавляем второе сообщение в WeakSet
/* readMessages.add(messages[1]); */  // messages[1] добавляется в readMessages

// Пытаемся снова добавить первое сообщение в WeakSet
readMessages.add(messages[0]);  // Хотя messages[0] уже есть в WeakSet, это не влияет на его состояние
messages.shift(); // Удаляем первое сообщение (messages[0]) из массива
// Проверяем, содержится ли messages[0] в WeakSet
console.log(readMessages.has(messages[0]));  // true, так как messages[0] добавлено в WeakSet
