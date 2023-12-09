let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: rgb(41, 27, 54);'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: rgb(107, 69, 143);">BTS o 방탄소년단, Bangtan Sonyeondan, es un grupo de K-pop surcoreano formado por Big Hit Entertainment. Está compuesto por siete integrantes: Jin, Suga, J-Hope, RM, Jimin, V y Jungkook. Debutaron el 12 de junio de 2013 con la canción «No More Dream» incluida en su primer sencillo 2 Cool 4 Skool. Su estreno en Japón se produjo con la versión en japonés de «No More Dream» el 4 de junio de 2014. El nombre del club de fans oficial es A.R.M.Y, acrónimo de «Adorable Representative MC for Youth».</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();