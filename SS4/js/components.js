const components = {}; // Đùng để lưu trữ giao diện các màn hình tại đây

components.registerScreen = `
<div class="register-container">
    <div class="aside-right">
      <div class="header">
        <h3>MindX chat</h3>
      </div>

      <form id="register-form">
        <div class="input-name-wrapper">
          <div class="input-wrapper">
            <input type="text" name="firstName" placeholder="Input first name ...">
            <div class="error" id="first-name-error"></div>
          </div>

          <div class="input-wrapper">
            <input type="text" name="lastName" placeholder="Input last name ...">
            <div class="error" id="last-name-error"></div>
          </div>

        </div>

        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Input email ...">
          <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="password" placeholder="input password ....">
          <div class="error" id="password-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="confirmPassword" placeholder="input confirm password ...">
          <div class="error" id="confirm-password-error"></div>
        </div>

        <div class="form-action">
          <span class="cursor" id="redirect-to-login">
            Already have an account? Login
          </span>

          <button class="btn" type="submit">
            Register
          </button>
        </div>

      </form>
    </div>
  </div>
`;


components.loginScreen = `
<div class="login-container">
    <div class="aside-right">
      <div class="header">
        <h3>MindX chat</h3>
      </div>

      <form id="login-form">

        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Input email ...">
          <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="password" placeholder="input password ....">
          <div class="error" id="password-error"></div>
        </div>

        <div class="form-action">
          <span class="cursor" id="redirect-to-register">
            Don't have an account? Register
          </span>

          <button class="btn" type="submit">
            login
          </button>
        </div>

      </form>
    </div>
  </div>
`;