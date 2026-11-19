import React from 'react';
import Wall from './Wall';
import Window from './Window';
import Certificates from './Certificates';
import Trophies from './Trophies';
import Corkboard from './Corkboard';
import Bookshelf from './Bookshelf';
import Rug from './Rug';
import Amp from './Amp';
import Guitar from './Guitar';
import Notes from './Notes';
import Desk from './Desk';
import Monitor from './Monitor';
import Cat from './Cat';
import Person from './Person';

export default function Room({ sc, night, day, cat, ampCls, ampLed, playing }) {
  return (
    <>
      <Wall sc={sc} />
      <Window sc={sc} night={night} day={day} />
      <Certificates />
      <Trophies />
      <Corkboard />
      <Bookshelf />
      <Rug />
      <Amp ampCls={ampCls} ampLed={ampLed} />
      <Guitar />
      {playing && <Notes />}
      <Desk />
      <Monitor />
      <Cat cat={cat} />
      <Person />
    </>
  );
}
