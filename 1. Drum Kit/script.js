'use strict'

// select all the key and store in keys var
const keys = document.querySelectorAll('.key')

function removeTransition(e) {
  if (e.propertyName !== 'transform') return
  e.target.classList.remove('playing')
}

function playSound(event) {
  // if the correct key is pressed
  const audio = document.getElementById(`key-${event.key}`)
  const key = document.querySelector(`.key[data-key="${event.key}`)
  // stop the function if wrong button is clicked
  if (!audio) {
    return
  }
  // Add the playing class
  key.classList.add('playing')
  audio.currentTime = 0
  // play audio
  audio.play()
}

// for-of loop for all the key
for (const key of keys) {
  key.addEventListener('transitionend', removeTransition)
}
// Event-listener on keypress
document.addEventListener('keydown', playSound)
