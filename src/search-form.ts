import { renderBlock } from "./lib.js";
import { SearchFormData } from "./index.js";

export function renderSearchFormBlock(searchForm: SearchFormData): void {
  renderBlock(
    "search-form-block",
    `
    <form onsubmit="onSearch">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${searchForm.toDay}" min="${searchForm.toDay}" max="${searchForm.lastDay}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${searchForm.lastDay}" min="${searchForm.toDay}" max="${searchForm.lastDay}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="submit" id="button">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );

  interface Place {
    arrEmpty: string[];
  }

  const employee: Place = {
    arrEmpty: [],
  };

  const button = document.getElementById("button");

  if (button != null) {
    button.onclick = function (e): void {
      e.preventDefault();
      const inpToDay = <HTMLInputElement>(
        document.querySelector("#check-in-date")
      );
      const inpLastDay = <HTMLInputElement>(
        document.querySelector("#check-out-date")
      );

      const searchFormData: SearchFormData = {
        toDay: inpToDay.value,
        lastDay: inpLastDay.value,
      };
      search(searchFormData, (arrEmpty: Place, error: string) => {
        setTimeout(() => {
          const randNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
          console.log(randNum);

          if (randNum % 2 === 0) {
            console.log("yes", arrEmpty);
          } else {
            console.log("no", error);
          }
        }, 3000);
      });

      function search(form: SearchFormData, printCb) {
        console.log(form);
        const res = printCb(employee, "error");
        if (res != undefined) {
          console.log(res);
        }
      }
    };
  }
}
