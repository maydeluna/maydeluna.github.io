let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});
 
typewriter
  .pauseFor(1500)
  .typeString('Desarrolladora De Front-End!')
  .pauseFor(100)
  .deleteChars(7)
  .start();
