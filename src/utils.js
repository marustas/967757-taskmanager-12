import {MONTH_NAMES} from "./constant";

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomArrayItem = (array) => {
  return array[getRandomIntInclusive(0, array.length - 1)];
};

export const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

export const checkIfDateIsExpired = (dueDate) => {
  return dueDate instanceof Date && dueDate < Date.now();
};

export const checkIfDateIsShowing = (dueDate) => {
  return !!dueDate;
};

export const setFormatedDate = (isDateShowing, dueDate) => {
  return isDateShowing ? `${dueDate.getDate()} ${MONTH_NAMES[dueDate.getMonth()]}` : ``;
};

export const setFormatedTime = (isDateShowing, dueDate) => {
  return isDateShowing ? formatTime(dueDate) : ``;
};

export const checkIfTaskIsRepeating = (description, repeatingDays) => {
  return description ? Object.values(repeatingDays).some(Boolean) : false;
};

export const toggleRepeatClass = (isRepeatingTask) => {
  return isRepeatingTask ? `card--repeat` : ``;
};

export const toggleDeadlineClass = (isExpired) => {
  return isExpired ? `card--deadline` : ``;
};
