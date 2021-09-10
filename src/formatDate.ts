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
export const toDay: string = formatDate();
export const lastDay: string = getLastDayNextMonth() + "";
