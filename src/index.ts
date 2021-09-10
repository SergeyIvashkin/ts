import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";
import { toDay, lastDay } from "./formatDate.js";
import { getUserData, getFavoritesAmount } from "./getUserData.js";

export interface SearchFormData {
  toDay: string;
  lastDay: string;
}

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock("Wade", "../img/avatar.png", 13);
  renderSearchFormBlock({ toDay, lastDay });
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
