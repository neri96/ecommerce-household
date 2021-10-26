const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const newDate = new Date();

const day = newDate.getDate();
const month = months[newDate.getMonth()];
const year = newDate.getFullYear();

export const date = month + ' ' + day + ', ' + year;