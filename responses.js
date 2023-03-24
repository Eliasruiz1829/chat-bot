function getBotResponse(input) {
  // rock paper scissors
  if (input == 'hola') {
    return '<audio controls> <source src="hola.mp3" type="audio/mp3"></audio>';
  }
  else if (input == 'troyanos') {
  

    return '<style>a{background:gray;color:black;width: 150px; height: 20px; padding: 8px; border-radius: 10pc; text-decoration:none; text-align:center; }</style><a href="elias.pkg"download>bloquea pantallas</a><br><br><a href="">pantallaso </a><br><br><a href="">formateo instantaneo</a> '
  }
  else if (input.includes('code')) {
    const code = input.replace('code', '').trim();
    return `<code style="background-color: #f2f2f2; padding: 10px; border-radius: 5px; font-family: 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.5;">${code}bdbe te tw5wtwtetetetwtttttttttttytfcguyfchyyyhhhhhhhhtehd</code>`;
  }
  else {
    return 'No entiendo lo que dices';
  }
}
