const soundsArrOne = [
    {
        key: 'Q',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        keyCode: 81,
        id: 'Heater-1',
    },
    {
        key: 'W',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        keyCode: 87,
        id: 'Heater-2',
    },
    {
        key: 'E',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        keyCode: 89,
        id: 'Heater-3',
    },
    {
        key: 'A',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        keyCode: 69,
        id: 'Heater-4',
    },
    {
        key: 'S',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        keyCode: 65,
        id: 'Clap',
    },
    {
        key: 'D',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        keyCode: 68,
        id: 'Open HH',
    },
    {
        key: 'Z',
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        keyCode: 90,
        id: "Kick-n'-Hat",
    },
    {
        key: 'X',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        keyCode: 88,
        id: 'Kick',
    },
    {
        key: 'C',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        keyCode: 67,
        id: 'Closed HH',
    },
];

const DrumPad = ({ playSound }) => {
    return soundsArrOne.map((sound) => {
        console.log(<DrumPad />, sound.key)
        return (
	    <button 
            className='drum-pad'
            key={sound.key}
            id={sound.id}
            onClick={() => playSound(sound.key)}>
            {sound.key}
        <audio id={sound.key} key={sound.id} src={sound.src} className='clip'/>
    	</button>
	    );
    });
};

const PadKeys = ({ playSound }) => {
  
};


export {
    DrumPad,
    PadKeys,
};