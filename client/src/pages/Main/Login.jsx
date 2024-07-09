import { h, Fragment, Component } from 'preact';
import { route } from 'preact-router';
import './login.css';
import useUserStore from '../../components/store/userStore';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_: '',
      password: '',
      error: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      error: ''
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    // const { user_, password } = this.state;
    // const { login } = useUserStore.getState();

    // if (!user_ || !password) {
    //   this.setState({ error: 'Please fill in both username and password' });
    //   return;
    // }

    // try {
    //   await login(user_, password);
    //   console.log('Login successful');
      route('/alpha-s');
    // } catch (error) {
    //   console.error('Login failed:', error);
    //   this.setState({ error: 'Invalid username or password' });
    // }
  }

  render() {
    const { user_, password, error } = this.state;

    return (
      <div class="login">
        <form onSubmit={this.handleSubmit}>
          <div class="login_input">
            <label htmlFor="user_">Username:</label>
            <input
              type="text"
              id="user_"
              name="user_"
              value={user_}
              onChange={this.handleInputChange}
            />
          </div>
          <div class="login_input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div class="submit_button">
          <button type="submit" class="submit">Login In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

