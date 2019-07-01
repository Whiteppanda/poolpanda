import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'jae',
  lastName: 'young'
};

function tick(){
  const element = (
    <main>
      <section>
        <h1> Hello, {formatName(user)}! </h1>
        <h2> It is {new Date().toLocaleTimeString()}.</h2>
        <h3> jiwoong babo </h3>
        <h4> jiwoong babo </h4>
      </section>
      <div>
        <h1> Hello, {formatName(user)}! </h1>
        <h2> It is {new Date().toLocaleTimeString()}.</h2>
        <h3> jiwoong babo </h3>
        <h4> jiwoong babo </h4>
      </div>
    </main>

  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick,1000);
