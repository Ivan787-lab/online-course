import '../css/style.css'
import '../css/style.scss'

let progressValue = document.querySelector('progress').value
document.querySelector('#progress__span-earned').innerHTML = progressValue + "₽"