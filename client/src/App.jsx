import React, { useEffect } from 'react';
import Card from './Card.jsx'
import './App.css'
import './Header.css'
import { useState } from 'react'
import axios from 'axios';
function App() {
  const [cards, setCards] = useState([]);
  const colors = ["#ff7eb9", "	#ff65a3", "#7afcff","#fff740","#f1f58f", "#ffa930", "#ff32b2", "#a9edf1", "#74ed4b", "#ce81ff","#71d7ff", "#cdfc93"];

  const deleteTask = async (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`)
    .then(response => {
      console.log('Task deleted:', response.data);
    })
    .catch(error => {
      console.error('Error deleting task:', error);
    });
  }
  
  
  function deleteCard(id) {
    setCards(currentCards => {
      deleteTask(id);
      return currentCards.filter(card => card.props.id !== id);
    });
  }
  
  
  // Function to fetch data from the server
  const getData = async () => {
    axios.get('http://localhost:3000/tasks').then((data) => {
      const tasks = data.data;
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const newElement = React.createElement(Card, {
          key: task._id,
          id: task.id,
          OnDelete: deleteCard,
          color: task.color,
          title: task.title,
          description: task.description,
          x: task.x,
          y: task.y,
          completed: task.completed,
          dueDate: task.dueDate
        }, null);
        setCards(currentCards => {
          return [...currentCards, newElement];
        });
      }
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }
  //Function to save a new task
  const saveTask = async (currentCards) => {
    const tasks = [];
    for (let i = 0; i < currentCards.length; i++) {
      const card = currentCards[i];
      const cardTitle = document.getElementsByClassName('title')[i];
      const cardDescription = document.getElementsByClassName('description')[i];
      const cardPosition = document.getElementsByClassName('draggable')[i].getBoundingClientRect();

      const task = {
        id: card.props.id,
        title: cardTitle.innerText || 'New Task',
        description: cardDescription.innerText || '',
        x: cardPosition.x || 0,
        y: cardPosition.y || 0,
        completed: card.props.completed || false,
        dueDate: card.props.dueDate || new Date(),
        color: card.props.color
      };
      tasks.push(task);
    }
    // Send a POST request to save the task
    axios.post('http://localhost:3000/tasks', tasks)
    .then(response => {
      console.log('Task saved:', response.data);
    })
    .catch(error => {
      console.error('Error saving task:', error);
    });
  }
  
  useEffect(() => {
    getData();
  }, []);
  
  window.onbeforeunload = async function () {
    await saveTask(cards);
  }
  return (
    <>
      <div className="header">
        <div className="heading">
          Sticky-DO
        </div>
        <div className="create">
          <button onClick={() => {
            const newId = Date.now();
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const newElement = React.createElement(Card, { key: Date.now(), id: newId, OnDelete: deleteCard, color: randomColor}, null);
            setCards(currentCards => {
              saveTask([...currentCards, newElement]);
              return [...currentCards, newElement];
            });
          }}>+</button>
        </div>
      </div>
      <div className="content">
        {cards.map((card) => {
          return card;
        })}
      </div>
    </>
  )
}

export default App;