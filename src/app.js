/* eslint-disable react/button-has-type */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/react-in-jsx-scope */
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const opArr = ['thing one', 'thing2', 't4'];
    let chosen = '';
    const addOptionFunction2 = e => {
      e.preventDefault();
      const option = e.target.option.value;
      optionsArray.push(option);
      e.target.option.value = "";
      console.log(optionsArray);
    };

    return (
      <div>
        <Header header={title} subheader={subtitle} />
        <Action opArr={opArr} />
        <Options options={opArr} />
        <AddOption addOptionFunction={addOptionFunction2} />
      </div>
    )
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
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
  }

  handlePick() {
    const chosen = Math.floor(Math.random());
    console.log(chosen);
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}
class Options extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll () {
    console.log('removed');
    console.log(this.props.options);
  }

  render() {
    console.log(this.props.options);
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ol>
          {this.props.options.map(option => (
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
  addOptionFunction (e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();
    if (option) {
      console.log(option);
    }
    e.target.option.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addOptionFunction}>
          <input name="option" type="text" placeholder="type option here" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
