const hour = document.getElementById('hour')
const min = document.getElementById('minute')
const sec = document.getElementById('second')
const mili = document.getElementById('milisecond')
const tim = document.getElementById('time')


function updateTime() {
    const ho = new Date().getHours()
    const mi = new Date().getMinutes()
    const se = new Date().getSeconds()
    const ti = new Date().getTime()
    const mil = new Date().getMilliseconds()


    hour.textContent = ho > 12 ? `0${ho - 12}` : ho
    min.textContent = mi < 10 ? `0${mi}` : mi
    sec.textContent = se < 10 ? `0${se}` : se
    mili.textContent = mil < 10 ? `0${mil}` : mil
    tim.textContent = ti < 12 ? "AM" : "PM"

    setTimeout(() => updateTime(), 100)
}
updateTime()