'use strict'

// selecting all the inputs
const inputs = document.querySelectorAll('.controls input')

// function to change set the value
function handleUpdate() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  )
}

// when change event happens
inputs.forEach(input => input.addEventListener('change', handleUpdate))

// when mousemove event happens
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
