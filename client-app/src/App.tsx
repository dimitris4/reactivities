import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Header, List} from "semantic-ui-react";

const data = [{id:1, title:'Past Activity 1'}, {id:2, title:'Past Activity 2'}, {id:3, title:'Past Activity 3'},
  {id:4, title:'Future Activity 1'}, {id:5, title:'Future Activity 2'}, {id:6, title:'Future Activity 3'}]

function App() {

  // // Fetching from the API
  // const [activities, setActivities] = useState([]);
  //
  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/activities').then( response => {
  //     console.log(response);
  //     setActivities(response.data);
  //   })
  // }, [])

  const activities = data;

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
        <List>
          {activities.map((activity: any) => (
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
