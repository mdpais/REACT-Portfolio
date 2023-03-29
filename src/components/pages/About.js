import React from 'react';

export default function About() {
  return (
    <div className='main'>
      <h2>About Me</h2>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <div class="avatar">
              <img src="./AvatarM-d.jpg" class="img-fluid rounded-start" alt="My avatar"></img>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">This is Me</h5>
              <p class="card-text">A restless soul with strong logic and a penchant for puzzles. My interests as a teenager exposed me to some html and css and my most recent stint in technical writing required me draw on some of that almost forgotten knowledge, which reignited my interest in coding. So here we are. </p>
              <p class="card-text">I'm a perfectionist and I've got a long way to go to being satisfied with my abilities. But I will get there... eventually!</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 28 March 2023</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
