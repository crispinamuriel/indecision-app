/* eslint-disable react/react-in-jsx-scope */
console.log('working as intended');

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      details: 'These are some details'
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button type="submit" onClick={this.handleToggle}>
          {this.state.visible ? 'hide details' : 'show details'}
        </button>
        {this.state.visible && (
          <div>
            <p>{this.state.details}</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Toggle />,  document.getElementById('app'));

// const app = {
//   details: 'These are the details',
//   showDetails: false
// }

// const showMyDetails = () => {
//   app.showDetails = !app.showDetails;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showMyDetails}>
//         {app.showDetails ? "Hide Details" : "Show Details"}
//       </button>
//       {app.showDetails && <h3>{app.details}</h3>}
//     </div>
//   );
//   const appRoot = document.getElementById('app');
//   ReactDOM.render(template, appRoot);
// }

// render();
