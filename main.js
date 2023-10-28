let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #aa6581;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #aa6581;">Me gusta aprender cosas nuevas, cocinar y me encantan los conejos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
