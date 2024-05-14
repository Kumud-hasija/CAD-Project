let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleMode() {
    let modeToggle = document.getElementById('mode-toggle');
    if (modeToggle.checked) {
        // Switch to scientific mode
        let scientificButtons = document.querySelectorAll('.buttons button:nth-child(4), .buttons button:nth-child(5)');
        scientificButtons.forEach(button => button.style.display = 'block');
    } else {
        // Switch to standard mode
        let scientificButtons = document.querySelectorAll('.buttons button:nth-child(4), .buttons button:nth-child(5)');
        scientificButtons.forEach(button => button.style.display = 'none');
    }
}
/* conversion section*/
document.addEventListener('DOMContentLoaded', function() {
  const lengthInput = document.getElementById('length-input');
  const lengthOutput = document.getElementById('length-output');
  const lengthSlider = document.getElementById('length-slider');

  lengthInput.addEventListener('input', function() {
      lengthOutput.textContent = lengthInput.value;
  });

  lengthSlider.addEventListener('input', function() {
      lengthInput.value = lengthSlider.value;
      lengthOutput.textContent = lengthInput.value;
  });

  const weightInput = document.getElementById('weight-input');
  const weightOutput = document.getElementById('weight-output');
  const weightSlider = document.getElementById('weight-slider');

  weightInput.addEventListener('input', function() {
      weightOutput.textContent = weightInput.value;
  });

  weightSlider.addEventListener('input', function() {
      weightInput.value = weightSlider.value;
      weightOutput.textContent = weightInput.value;
  });

  // Add similar event listeners for other conversions
 
});

document.addEventListener('DOMContentLoaded', function() {
  const volumeInput = document.getElementById('volume-input');
  const volumeOutput = document.getElementById('volume-output');
  const volumeSlider = document.getElementById('volume-slider');

  volumeInput.addEventListener('input', function() {
      volumeOutput.textContent = volumeInput.value;
  });

  volumeSlider.addEventListener('input', function() {
      volumeInput.value = volumeSlider.value;
      volumeOutput.textContent = volumeInput.value;
  });

  // Add similar event listeners for other conversions

});

document.addEventListener('DOMContentLoaded', function() {
  const temperatureInput = document.getElementById('temperature-input');
  const temperatureOutput = document.getElementById('temperature-output');
  const temperatureSlider = document.getElementById('temperature-slider');

  temperatureInput.addEventListener('input', function() {
      temperatureOutput.textContent = temperatureInput.value;
  });

  temperatureSlider.addEventListener('input', function() {
      temperatureInput.value = temperatureSlider.value;
      temperatureOutput.textContent = temperatureInput.value;
  });

  // Add similar event listeners for other conversions

});
/*formula section */
document.addEventListener('DOMContentLoaded', function() {
    const collapsibleButtons = document.querySelectorAll('.collapsible');
  
    collapsibleButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
  });
  
  
