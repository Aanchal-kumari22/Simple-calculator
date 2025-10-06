function append(value) {
  document.getElementById('inputbox').value += value;
}

function clearDisplay() {
  document.getElementById('inputbox').value = '';
}

function deleteLast() {
  const display = document.getElementById('inputbox');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('inputbox');
  try {
    // Replace 'log' with Math.log10, since JavaScript uses natural log
    const expression = display.value.replace(/log/g, 'Math.log10')
                                    .replace(/sin/g, 'Math.sin')
                                    .replace(/cos/g, 'Math.cos')
                                    .replace(/tan/g, 'Math.tan');

    display.value = eval(expression);
  } catch (e) {
    display.value = 'Error';
  }
}


