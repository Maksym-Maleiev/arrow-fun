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

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);

//     const inner = () => {
//       console.log('this in inner: ', this);
//     };

//     inner();
//   },
// };

// user.showName();

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

// user.showName();

/*
 * 💩 Стрілка-конструктор
 */

// const User = name => {
//   this.name = name;
// };

// console.log(new User('Mango'));

/*
 * ще раз стрілка як метод об'єкта
 */

const objA = {
  x: 5,
  showX() {
    console.log(this.x);

    const objB = {
      y: 10,
      showThis() {
        console.log('this in objB.showThis');
      },
    };
  },
};

objA.showX();
