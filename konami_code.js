const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  function konamiHandler(e) {
    const key = parseInt(e.detail || e.which);
    
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Konami wants to congratulate you!!!");
        index = 0;
      }
      else {
        index = 0;
      }
    }
  }
  
  document.body.addEventListener('keydown', konamiHandler);
  
}