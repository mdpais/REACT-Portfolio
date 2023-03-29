import React from 'react';

function App(props) {
  return (
    <div class="col-sm-4 mb-3 mb-sm-0">
      <div class="card app">
        <img src={ props.image } class="card-img-top" alt={ props.title }></img>
        <div class="card-body title">
          <h5 class="card-title">{ props.title }</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><a href={ props.deploy } class="card-link">Deployed Application</a></li>
          <li class="list-group-item"><a href={ props.git } class="card-link">GitHub Repository</a></li>
        </ul>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const apps = [
    {image: "./too-much-food.png", title: "Too Much Food", deploy: "https://too-much-food.herokuapp.com/", git: "https://github.com/mdpais/Too-Much-Food"},
    {image: "./fifa-fever.jpg", title: "FIFA Fever", deploy: "https://mdpais.github.io/FIFA-Fever/", git: "https://github.com/mdpais/FIFA-Fever"},
    {image: "./weather.jpg", title: "Weather Dashboard", deploy: "https://mdpais.github.io/Weather-Dashboard/", git: "https://github.com/mdpais/Weather-Dashboard"},
    {image: "./scheduler.jpg", title: "Scheduler", deploy: "https://mdpais.github.io/Scheduler/", git: "https://github.com/mdpais/Scheduler"},
    {image: "./matrix.jpg", title: "Password Generator", deploy: "https://mdpais.github.io/Password-Generator/", git: "https://github.com/mdpais/Password-Generator"},
    {image: "./quiz.jpg", title: "Coding Quiz", deploy: "https://mdpais.github.io/Coding-Quiz/", git: "https://github.com/mdpais/Coding-Quiz"},
  ];
  return (
    <div className='main'>
      <h2>Portfolio</h2>
      <div class="row">
        {apps.map((app) => <App image={app.image} title={app.title} deploy={app.deploy} git={app.git} />)}
      </div>
    </div>
  );
}
