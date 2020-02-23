/* eslint-disable react/button-has-type */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/react-in-jsx-scope */
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Indecision",
      subtitle: "Put your life in the hands of a computer",
      options: [],
      chosenOption: ""
    };
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handlePick() {
    const chosen = Math.floor(Math.random() * this.state.options.length);
    this.setState((prevState) => {
      return {
        chosenOption: prevState.options[chosen]
      }
    });
    alert(this.state.options[chosen]);
  }
  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handleAddOption(e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();
    if (option) {
      this.setState((prevState) => {
        return {
          options: [...prevState.options, option]
        }
      });
    }
    e.target.option.value = '';
    console.log(this.state.options);
  }

  render() {
    return (
      <div>
        <Header header={this.state.title} subheader={this.state.subtitle} />
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 1} />
        <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const header = this.props.header;
    const subheader = this.props.subheader;
    return (
      <div>
        <h1>{header}</h1>
        <h2>{subheader}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
render() {
    return (
      <div>
          <button
          onClick={() => this.props.handlePick()}
          disabled={!this.props.hasOptions}
          >What should I do?</button>
      </div>
    )
  }
}
class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleRemoveAll}>Remove All</button>
        <ol>
          {this.props.options.map((option, i) => (
            <Option key={option} option={option} />
          ))}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const option = this.props.option;
    return (
      <div>
        <li>{option}</li>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleAddOption}>
          <input name="option" type="text" placeholder="type option here" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
