// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');

  const synth = window.speechSynthesis;

  // load voices
  function loadVoices() {
    const voices = synth.getVoices();

    // clear options
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // voices load
  loadVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  // talking
  talkButton.addEventListener('click', function () {
    const text = textArea.value;
    const selectedIndex = voiceSelect.value;

    if (!text || selectedIndex === 'select') return;

    // cancel
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    utterance.voice = voices[selectedIndex];

    // swap speaking
    utterance.onstart = function () {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Talking face';
    };

    // swap done
    utterance.onend = function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}