import React, { Component } from "react";
import "./formValidation.css";
import * as _ from "lodash";

export default class formValidaton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e, name) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (name == "username") {
      this.checkUsername(
        document.getElementsByClassName("username-input"),
        document.getElementById("username-error")
      );
    }
    if (name == "password") {
      this.checkUsername(
        document.getElementsByClassName("password-input"),
        document.getElementById("password-error")
      );
    }
  }

  checkUsername(inputField, errorField) {
    let prevState = this.state;
    let valid = false;

    const min = 3,
      max = 25;
    const username = _.trim(inputField[0].value);
    // let usernameEl = "";

    if (!this.isRequired(username)) {
      this.showError(inputField[0], "Username cannot be blank.", errorField);
    } else if (!this.isBetween(username.length, min, max)) {
      this.showError(
        inputField[0],
        `Username must be between ${min} and ${max} characters.`,
        errorField
      );
    } else {
      this.showSuccess(inputField[0], errorField);
      valid = true;
    }
    return valid;
  }
  isRequired = (value) => (value === "" ? false : true);
  isBetween = (length, min, max) =>
    length < min || length > max ? false : true;

  showError = (input, message, errorField) => {
    // const formField = input;
    if (input.classList.contains("success")) {
      input.classList.remove("success");
    } else {
      input.classList.add("error");
    }
    const error = (errorField.innerHTML = message);
  };

  showSuccess = (input, errorField) => {
    if (input.classList.contains("error")) {
      input.classList.remove("error");
    } else {
      input.classList.add("success");
    }
    const error = (errorField.innerHTML = "");
  };
  updateState(prevState) {
    this.setState((state) => {
      state = prevState;
      return state;
    });
  }
  render() {
    return (
      <div class="container">
        <div class="form-field ">
          <label for="username">Username:</label>
          <input
            className="username-input"
            type="text"
            name="username"
            autocomplete="off"
            onChange={(e) => {
              this.handleInput(e, "username");
            }}
          />
          <small id="username-error"></small>
        </div>
        <div class="form-field ">
          <label for="password">password</label>
          <input
            className="password-input"
            type="text"
            name="password"
            autocomplete="off"
            onChange={(e) => {
              this.handleInput(e, "password");
            }}
          />
          <small id="password-error"></small>
        </div>
      </div>
    );
  }
}

// const checkEmail = () => {
//   let valid = false;
//   const email = emailEl.value.trim();
//   if (!isRequired(email)) {
//     showError(emailEl, "Email cannot be blank.");
//   } else if (!isEmailValid(email)) {
//     showError(emailEl, "Email is not valid.");
//   } else {
//     showSuccess(emailEl);
//     valid = true;
//   }
//   return valid;
// };

// const checkPassword = () => {
//   let valid = false;

//   const password = passwordEl.value.trim();

//   if (!isRequired(password)) {
//     showError(passwordEl, "Password cannot be blank.");
//   } else if (!isPasswordSecure(password)) {
//     showError(
//       passwordEl,
//       "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
//     );
//   } else {
//     showSuccess(passwordEl);
//     valid = true;
//   }

//   return valid;
// };

// const checkConfirmPassword = () => {
//   let valid = false;
//   // check confirm password
//   const confirmPassword = confirmPasswordEl.value.trim();
//   const password = passwordEl.value.trim();

//   if (!isRequired(confirmPassword)) {
//     showError(confirmPasswordEl, "Please enter the password again");
//   } else if (password !== confirmPassword) {
//     showError(confirmPasswordEl, "The password does not match");
//   } else {
//     showSuccess(confirmPasswordEl);
//     valid = true;
//   }

//   return valid;
// };

// const isEmailValid = (email) => {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// };

// const isPasswordSecure = (password) => {
//   const re = new RegExp(
//     "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
//   );
//   return re.test(password);
// };

// form.addEventListener("submit", function (e) {
//   // prevent the form from submitting
//   e.preventDefault();

//   // validate fields
//   let isUsernameValid = checkUsername(),
//     isEmailValid = checkEmail(),
//     isPasswordValid = checkPassword(),
//     isConfirmPasswordValid = checkConfirmPassword();

//   let isFormValid =
//     isUsernameValid &&
//     isEmailValid &&
//     isPasswordValid &&
//     isConfirmPasswordValid;

//   // submit to the server if the form is valid
//   if (isFormValid) {
//   }
// });

// const debounce = (fn, delay = 500) => {
//   let timeoutId;
//   return (...args) => {
//     // cancel the previous timer
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     // setup a new timer
//     timeoutId = setTimeout(() => {
//       fn.apply(null, args);
//     }, delay);
//   };
// };

// form.addEventListener(
//   "input",
//   debounce(function (e) {
//     switch (e.target.id) {
//       case "username":
//         checkUsername();
//         break;
//       case "email":
//         checkEmail();
//         break;
//       case "password":
//         checkPassword();
//         break;
//       case "confirm-password":
//         checkConfirmPassword();
//         break;
//     }
//   })
// );
