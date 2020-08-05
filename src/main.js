
import {createSiteMenuTemplate} from "./view/site-menu";
import {createSiteFilterTemplate} from "./view/filter";
import {createSiteBoardTemplate} from "./view/sort-board";
import {createEditTaskTemplate} from "./view/task-edit";
import {createTaskTemplate} from "./view/task";
import {createLoadMoreBtnTemplate} from "./view/load-button";
import {generateFilters} from "./mocki/filter";
import {generateTasks} from "./mocki/task";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);

const filters = generateFilters(tasks);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createSiteFilterTemplate(filters));
render(siteMainElement, createSiteBoardTemplate());

const siteBoardElement = siteMainElement.querySelector(`.board`);
const siteBoardTasksElement = siteBoardElement.querySelector(`.board__tasks`);

render(siteBoardTasksElement, createEditTaskTemplate(tasks[0]));

let showingTaskCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTaskCount).forEach((task) => {
  render(siteBoardTasksElement, createTaskTemplate(task));
});

render(siteBoardElement, createLoadMoreBtnTemplate());

const loadMoreButton = siteBoardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTaskCount = showingTaskCount;
  showingTaskCount = showingTaskCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTaskCount, showingTaskCount)
    .forEach((task) => {
      render(siteBoardTasksElement, createTaskTemplate(task));
    });

  if (showingTaskCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
