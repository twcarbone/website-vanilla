import { Login } from "./login.js";

const form = document.querySelector(".loginForm");

if (form) {
  const fields = ["email", "password"];
  const validator = new Login(form, fields);
}
