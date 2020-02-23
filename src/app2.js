/* eslint-disable react/no-multi-comp */
/* eslint-disable react/react-in-jsx-scope */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.option.value;
    this.setState((prevState) => {
      return {
        options: [...prevState.options, option]
      }
    });
    e.target.option.value = '';
  }

  handlePick () {
    alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Action
          options={this.state.options}
          hasOptions={this.state.options.length > 1}
          handlePick={this.handlePick}
          handleRemoveAll={this.handleRemoveAll}
        />
        <Options options={this.state.options} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h3>Put your life in the hands of a computer.</h3>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
      <button onClick={this.props.handlePick} disabled={!this.props.hasOptions} type="submit">What Should I do?</button> <br/>
      {this.props.options.length > 0 && <button onClick={this.props.handleRemoveAll} type="submit">Remove All</button>}
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <ol>
        {this.props.options.map((option) => {
          return <Option key={option} option={option} />
        })}
      </ol>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.option}</li>;
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleAddOption}>
        <input name="option" placeholder="type your option" />
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
