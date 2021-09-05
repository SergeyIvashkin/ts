import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";

const date: Date = new Date();
const year: number = date.getFullYear();
const month: number = date.getMonth();

const formatDate = (): string => {
  let month = "" + (date.getMonth() + 1);
  let day = "" + date.getDate();
  const year = date.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
};

const getLastDayNextMonth = (): string => {
  const date = new Date(year, month + 2, 0);
  const lastDay = date.getDate();
  return `${year}-${month + 2}-${lastDay}`;
};
const toDay: string = formatDate();
const lastDay: string = getLastDayNextMonth() + "";

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock("Wade111", "../img/avatar.png", 13);
  renderSearchFormBlock(toDay, lastDay);
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
