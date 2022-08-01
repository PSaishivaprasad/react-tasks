import React from "react";

import ReactFormInputValidation from "react-form-input-validation";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",

        pwd: "",

        conpwd: "",

        email: "",

        phone_number: "",
      },

      errors: {},
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
      name: "required|alpha|regex:/^[a-zA-Z][a-zA-Z]*$/",
      pwd: "required|regex:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*])(?=.{8,}",
      conpwd:
        "required|regex:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*])(?=.{8,}",
      email: "required|email",
      phone_number: "required|numeric",
    });
    this.form.onformsubmit = (fields) => {};
    this.handleChange = this.handleChange.bind(this);
    this.handleData = this.handleData.bind(this);
  }
  handleChange(e) {
    this.setState({
      phone_num: e.target.value,
    });
  }
  handleData() {
    alert("your phone number " + this.state.fields.phone_number);
  }

  render() {
    return (
      <html>
        <head></head>
        <body>
          {/* <Header></Header> */}

          <div className="container div1">
            <div className="row">
              <div className="card">
                <div className="card-title">
                  <div className="div2">
                    <h1>Sign Up</h1>
                    <p className="para1">
                      Please fill in this form to create an account.
                    </p>
                  </div>
                </div>

                <div className="card-body">
                  <form name="form1" onSubmit={this.form.handleSubmit}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 card1">
                      <label className="user">
                        USERNAME
                        <input
                          type="text"
                          name="name"
                          method="post"
                          onBlur={this.form.handleBlurEvent}
                          onChange={this.form.handleChangeEvent}
                          value={this.state.fields.name}
                        />
                      </label>
                      <div className="error">
                        {this.state.errors.name ? this.state.errors.name : ""}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <label className="pwd">
                        PASSWORD
                        <input
                          type="password"
                          name="pwd"
                          onBlur={this.form.handleBlurEvent}
                          onChange={this.form.handleChangeEvent}
                          value={this.state.fields.pwd}
                        />
                      </label>
                      <div className="error">
                        {this.state.errors.pwd ? this.state.errors.pwd : ""}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <label className="conpwd">
                        CONFIRM PASSWORD
                        <input
                          type="confirm"
                          name="conpwd"
                          onBlur={this.form.handleBlurEvent}
                          onChange={this.form.handleChangeEvent}
                          value={this.state.fields.conpwd}
                        />
                      </label>
                      <div className="error">
                        {this.state.errors.conpwd
                          ? this.state.errors.conpwd
                          : ""}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <label className="email">
                        EMAILID
                        <input
                          type="email"
                          name="email"
                          onBlur={this.form.handleBlurEvent}
                          onChange={this.form.handleChangeEvent}
                          value={this.state.fields.email}
                        />
                      </label>
                      <div className="error">
                        {this.state.errors.email ? this.state.errors.email : ""}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <label className="phone">
                        PHONE NUMBER
                        <input
                          type="text"
                          maxlength="10"
                          id="phone_number"
                          name="phone_number"
                          onKeyUp={(e) => this.handleChange(e)}
                          onBlur={this.form.handleBlurEvent}
                          onChange={this.form.handleChangeEvent}
                          value={this.state.fields.phone_number}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                      </label>
                      <div className="error">
                        {this.state.errors.phone_number
                          ? this.state.errors.phone_number
                          : ""}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <button
                        className="button"
                        name="submit"
                        type="button"
                        onClick={this.handleData}
                        value="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default Contact;
