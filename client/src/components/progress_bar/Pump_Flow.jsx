import { h, Fragment } from 'preact';
import { Component } from 'preact';
import './progressbar.css'
class PumpFlow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50 
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    const { value } = this.state;

    return (
      <div class="progress-container">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onInput={this.handleChange}
          class="progress-range"
        />
        <div class="progress-bar">
          <div class="progress-value" style={`width: ${value}%;`}></div>
        </div>
      </div>
    );
  }
}

export default PumpFlow;