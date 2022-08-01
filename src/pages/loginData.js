import React from "react";

import ReactFormInputValidation from "react-form-input-validation";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",

        pwd: "",
      },

      errors: {},
    };

    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
      name: "required|alpha",
      pwd: "required|regex: /^[@#][A-Za-z0-9]{7,13}$/",
    });
    this.form.onformsubmit = (fields) => {};
  }

  render() {
    return (
      <html>
        <head></head>
        <body>
          <div className="container">
            <div className="row">
              <div className="card">
                <div className="card-title">
                  <h1>LOGIN</h1>
                  <p className="para2">Please fill your login details.</p>
                </div>

                <div className="card-body">
                  <form onSubmit={this.form.handleSubmit}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <label className="user">
                        USERNAME
                        <input
                          type="text"
                          name="name"
                          onChange={this.form.handleChangeEvent}
                          value={this.state.fields.name}
                        />
                      </label>
                      <label className="error">
                        {this.state.errors.name ? this.state.errors.name : ""}
                      </label>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
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
                      <label className="error">
                        {this.state.errors.pwd ? this.state.errors.pwd : ""}
                      </label>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
                      <button className="button3" type="submit">
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

export default Login;
