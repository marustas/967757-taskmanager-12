import {REPEATING_DAYS, DESCRIPTIONS, COLORS} from "../constant";
import {getRandomArrayItem, getRandomIntInclusive, getRandomBoolean} from "../utils";

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = getRandomBoolean() ? 1 : -1;
  const diffValue = sign * getRandomIntInclusive(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateRepeatingDays = () => {
  return Object.assign({}, REPEATING_DAYS, {"mo": getRandomBoolean()});
};

const generateTask = () => {
  const dueDate = getRandomBoolean() ? null : getRandomDate();

  return {
    description: getRandomArrayItem(DESCRIPTIONS),
    dueDate,
    repeatingDays: dueDate ? REPEATING_DAYS : generateRepeatingDays(),
    color: getRandomArrayItem(COLORS),
    isArchive: getRandomBoolean(),
    isFavorite: getRandomBoolean()
  };
};

const generateTasks = (count) => {
  return new Array(count).fill(``).map(generateTask);
};

export {generateTask, generateTasks};
