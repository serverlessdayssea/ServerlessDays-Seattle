import React, { Component } from 'react';

class Schedule extends Component {
  render () {
    return (
      <div className='container' id='top'>
        <div className='container center-align'>
          <h2>Schedule </h2>
          <table>
            <tr>
              <th>Time</th>
              <th>Comment</th>
            </tr>
            <tr><td>09:00-09:10</td><td>Organizers - Opening Remarks</td></tr>
            <tr><td>09:10-09:40</td><td>Erica Windisch - Keynote </td></tr>
            <tr><td>09:45-10:15</td><td>Belinda Vennam - Server Side Serverless Swift</td></tr>
            <tr><td>10:15-10:30</td><td>BREAK w/Coffee</td></tr>
            <tr><td>10:30-11:00</td><td>Brian LeRoux - Functions: Faster to Deploy </td></tr>
            <tr><td>11:05-11:35</td><td>Chase Douglas - CloudFormation Dark Arts: Mastering Infrastructure As Code For Real-World Use Cases </td></tr>
            <tr><td>11:40-12:10</td><td>Brett McGowan - Knative and Kubernetes: bringing serverless to more developers </td></tr>
            <tr><td>12:15-13:30</td><td>BREAK w/Lunch - Check out the <a href="http://www.seattlecenter.com/locations/detail.aspx?id=41">Armory</a></td></tr>
            <tr><td>13:30-14:00</td><td>Josh Carlisle - Rainbows, Unicorns, and other Fairy Tales in the Land of Serverless Dreams </td></tr>
            <tr><td>14:05-14:35</td><td>Matthew Henderson - They can’t hack your servers if you don’t have any servers, right? </td></tr>
            <tr><td>14:40-15:10</td><td>Michael Garski - Serverless Microservices at Fender Digital </td></tr>
            <tr><td>15:10-15:20</td><td>BREAK</td></tr>
            <tr><td>15:20-15:50</td><td>Ace Nassri - Just keep functioning: how to test, monitor, and debug FaaS applications </td></tr>
            <tr><td>15:55-16:25</td><td>Yochay Kiriaty - Serverless Anti-Patterns and Common Mistakes</td></tr>
            <tr><td>16:25-17:30</td><td><a href="https://www.devopsdays.org/open-space-format/">Open Spaces</a></td></tr>
            <tr><td>17:35-17:45</td><td>Organizers - Closing Remarks</td></tr>
          </table>
          <img src={'/media/dino_mascot.png'} alt={'ServerlessDays mascot'} className='responsive-img not-wide' />
        </div>
      </div>
    );
  }
}


export default Schedule;
