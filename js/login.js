import FetchService from "./FetchService.js";

const fetchService = new FetchService();

export class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      var error = 0;

      self.fields.forEach((field) => {
        const input = document.querySelector(`#${field}`);
        if (self.validateFields(input) == false) {
          error++;
        }
      });

      if (error == 0) {
        self.submitForm();
      }
    });
  }

  validateFields() {
    return true;
  }

  async submitForm() {
    const response = await fetchService.postJSON("/api/login", {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });
    console.log(response);
  }
}
