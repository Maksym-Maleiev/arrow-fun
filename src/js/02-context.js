/*
 * Контекст стрілки
 *
 * Контекст усередині стрілки визначається місцем її оголошення, а не виклику,
 * І посилається на контекст батьківської функції.
 */

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

/*
 * 💩 Стрілки як методи об'єкта
 */

// const user = {
//   fullName: 'Mango',
//   showName: () => {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);
//   },
// };
