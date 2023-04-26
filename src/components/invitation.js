import React from 'react';

function Invitation({subject,to,name,birthday,friends,location,from}) {
  return (
    <div>
      <p>Subject : {subject}</p>
      <p>To: {to}</p>
      <br/>
      <p>Hi, {name}</p>
      <br/>
      <p>I am having a {birthday} next fridayat your Home . Would you like to come? It will be fun. Lots of people from my school are coming, you know some of them 
      - {friends}.</p>
      <br/>
      <p>My house is behind our school, near {location}.</p>
      <br/>
      <p>I hope you will come and see you soon.</p>
      <br/>
      <br/>
      <p>From, {from}</p>
      <br/>
    </div>
  );
}

export default Invitation;
