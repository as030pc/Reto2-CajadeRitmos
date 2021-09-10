import _default from 'atob';
import React, { Component } from 'react'
import { useEffect, useState } from 'react';

const audios = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  const Teclas = () => {
    const [volume, setvolume] = useState(1);
    return (
        <div  >
            <div>
                <h1>Drum Machine</h1>
                {audios.map(clip => (
                    <Pad volume = {volume} key = {clip.id} clip = {clip}/>
                ))}
                <div>
                  <h4>Controlador de volumen</h4>
                  <input type='range' step='0.01' onChange={(e)=> setvolume(e.target.value)} value={volume} max='1' min='0'/>
                </div>
            </div>
        </div>
    )
}

  function Pad ({clip, volume}) {
    useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
      return () =>{
        document.removeEventListener('keydown', handleKeyPress);
      }
    }, []);

    const handleKeyPress = (e) => {
      if (e.keyCode === clip.keyCode){
        playSound();
      }
    }

    const playSound = () => {
      const audioTag = document.getElementById(clip.keyTrigger);
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
    }
      return (
          <div onClick = {playSound}>
              <audio id = {clip.keyTrigger} src= {clip.url}>
              </audio>
                <button>{clip.keyTrigger} </button>
          </div>

      )

  }
  

export default Teclas



 {/* <div className  = "container d-flex justify-content-center mt-5">
            <div className = "row p-4 mt-4 border border-warning border-5">
                <div className="col-sm-2">
                    <button className = "btn btn-secondary p-4 m-1">Q</button>
                    <button  className = "btn btn-secondary p-4 m-2" >A</button>
                    <button  className = "btn btn-secondary p-4 m-2">Z</button>
                </div>
                <div className="col-sm-2">
                    <button  className = "btn btn-secondary p-4 m-2">W</button>
                    <button  className = "btn btn-secondary p-4 m-2">S</button>
                    <button  className = "btn btn-secondary p-4 m-2">X</button>
                </div>
                <div className="col-sm-2">
                    <button  className = "btn btn-secondary p-4 m-2">E</button>
                    <button  className = "btn btn-secondary p-4 m-2">D</button>
                    <button className = "btn btn-secondary p-4 m-2">C</button>
                </div>

            </div>
            </div> */}