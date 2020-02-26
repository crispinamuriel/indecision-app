/* eslint-disable no-alert */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-multi-comp */
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['eat', 'drink', 'code']
    }
    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handlePick () {
    const  optionIndex = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[optionIndex]);
  }
  handleRemoveAll () {
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  handleAddOption (e) {
    e.preventDefault();
    const option = e.target.option.value;
    if (option) {
      this.setState((prevState) => {
        return {
          options: [...prevState.options, option]
        }
      });
    }

    e.target.option.value = '';
  }
  render() {
    return (
      <div>
        <Header />
        <Action hasOptions={this.state.options.length > 1}handlePick={this.handlePick} handleRemoveAll={this.handleRemoveAll} />
        <Options options={this.state.options} handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>IndecisionApp</h1>
        <p>Put your life in the hands of a computer</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
         <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button><br />
         {this.props.hasOptions && <button onClick={this.props.handleRemoveAll}>Remove All</button>}
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ol>
          {this.props.options.map((option) => {
            return <Option key={option} option={option} />
          })}
        </ol>
        <form onSubmit={this.props.handleAddOption}>
          <input name="option" placeholder="type option here" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>
        {this.props.option}
      </li>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

