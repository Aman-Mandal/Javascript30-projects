'use strict'

const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
// transition of the hand in css
const transitionTxt = 'all 0.5s cubic-bezier(0, 1.9, 0.53, 1.79)'

// set Date function
function setDate() {
  // getting date with Date()
  const now = new Date()
  //   getting seconds
  const seconds = now.getSeconds()
  // converting the 360º degrees with seconds
  const secondsDegree = (seconds / 60) * 360 + 90 // add 90 because we rotated the hands 90deg
  // calling animate hand for seconds
  animateHand(seconds, secondHand, secondsDegree)

  // minute hand
  const minute = now.getMinutes()
  const minutesDegree = (minute / 60) * 360 + 90
  // calling animate hand for minutes
  animateHand(minute, minuteHand, minutesDegree)

  // hour hand
  const hour = now.getHours()
  const hoursDegree = (hour / 60) * 360 + 90
  // calling animate hand for hour
  animateHand(hour, hourHand, hoursDegree)

}

// animate hand function to rotate the hand 
// if time == 0, transition is set to none
function animateHand(time, hand, degree) {
  if (time === 0) {
    hand.style.transition = 'none'
  } else {
    hand.style.transition = transitionTxt
  }
  hand.style.transform = `rotate(${degree}deg)`
}

// changing in every 1000ms(1sec)
setInterval(setDate, 1000)
