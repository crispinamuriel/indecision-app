console.log('working as intended');

const app = {
  details: 'These are the details',
  showDetails: false
}

const showMyDetails = () => {
  app.showDetails = !app.showDetails;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showMyDetails}>
        {app.showDetails ? "Hide Details" : "Show Details"}
      </button>
      {app.showDetails && <h3>{app.details}</h3>}
    </div>
  );
  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
}

render();
