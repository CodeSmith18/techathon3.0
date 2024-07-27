// src/CardContainer.js
import React from 'react';
import Card from './Card';
import './CardContainer.css';

// Assuming the images are in the public folder

export const CardContainer = () => {
  const fileData = [
    { id: 'c1', title: '"AI-Enhanced Plastic Recycling"', description: 'Document on Hack3', bg: 'https://drive.google.com/uc?id=1ofCU7UcoHbQ6dwtGYi2qspmRo1Gl5_4l&export=download' },
    { id: 'c2', title: 'Artistic Style Transfer GANs', description: 'Paper on Artistic Style Transfer GANs', bg: 'https://drive.google.com/uc?id=1l_QeBqNUY2d9VoOaWvE3j9qpn4swZphE&export=download' },
    { id: 'c3', title: 'AI Tree Health Classifier', bg: 'https://drive.google.com/uc?id=1k2tTO6YMw1laJyWYK9QpGXV4qMNPPmtA&export=download' },
    { id: 'c4', title: 'hack2', description: 'Document on hack2', bg: 'https://drive.google.com/uc?id=1OV2zC7D_gmea57xahUCgyokvRQ1H35Ta&export=download' },
    { id: 'c5', title: 'Efficient Inference Knowledge Distillation', description: 'Paper on Knowledge Distillation', bg: 'https://drive.google.com/uc?id=1ubCYuZsc7CWDsNXrHOPJaJAzI9nOddqP&export=download' },
    { id: 'c6', title: 'Real-time Object Detection and Tracking', description: 'Paper on Object Detection', bg: 'https://drive.google.com/uc?id=1J9plCZhOPjJIAgA-gZVC8LcL5CGiR2tu&export=download' },
    { id: 'c7', title: 'Deploying Lightweight Language Model', description: 'Paper on Language Models', bg: 'https://drive.google.com/uc?id=1NospzqXeIac0AiZKtVTvon_WbAQ6R3P7&export=download' },
    { id: 'c8', title: 'Packaging Language Models', description: 'Paper on Packaging Models', bg: 'https://drive.google.com/uc?id=1qnzwqA0uRiO3dBmHc0aGfUyemHo7Xdz8&export=download' },
    { id: 'c9', title: 'Detecting Cyber Threats using GANs', description: 'Paper on Cyber Threats', bg: 'https://drive.google.com/uc?id=1tP0JjsCR2vCCpE0Jn24JoGcOSskjRJRp&export=download' },
    { id: 'c10', title: 'Developing an Offline AI Copilot', description: 'Paper on AI Copilot', bg: 'https://drive.google.com/uc?id=1Vp6ELjLr-mpFpzIdtNczhb8xNbKZ4Ba5&export=download' },
  ];

  return (
    // <div className="wrapper">
      <div className="containerrr" id='cc'>
        <h2> Problem Statements</h2>
        <div className='c33'>
        {fileData.map((card, index) => (
          <Card 
            key={index}
            id={card.id}
            title={card.title}
            description={card.description}
            icon={card.icon}
            checked={card.checked}
            backgroundImage={card.backgroundImage}
            download={card.bg}
          />
        ))}
        </div>
       
      </div>
   
  );
};


