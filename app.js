const readline = require('readline'); 
// Create readline interface 
readline.emitKeypressEvents(process.stdin); 
process.stdin.setRawMode(true); 
console.log('Press any arrow key. Press "q" to quit.\n'); 
process.stdin.on('keypress', (str, key) => { 
 if (key && key.name === 'q') { 
 console.log('Exiting...'); 
 process.exit(); 
 } 
 if (key && key.name) { 
 if (['up', 'down', 'left', 'right'].includes(key.name)) {  const arrowMap = { 
 up: 38, 
 down: 40, 
 left: 37, 
 right: 39 
 }; 
 console.log(`Arrow Key Pressed: ${key.name.toUpperCase()} → ASCII Code: ${arrowMap[key.name]}`); 
 } else { 
 console.log(`Key Pressed: ${key.name} (ASCII Code: ${key.sequence.charCodeAt(0)})`); 
 } 
 } 
});
