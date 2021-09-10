export function getUserData(): string {
  interface User {
    username: unknown;
    avatarUrl: unknown;
  }
  let user: User = {
    username: localStorage.getItem("user"),
    avatarUrl: localStorage.getItem("user"),
  };

  if (typeof user.username === "string" && typeof user.avatarUrl === "string") {
    return user.username && user.avatarUrl;
  }
  return (user = null);
}

export function getFavoritesAmount(): string {
  let amount: unknown = localStorage.getItem("favoritesAmount");

  if (typeof amount === "string") {
    return amount;
  }
  return (amount = null);
}
