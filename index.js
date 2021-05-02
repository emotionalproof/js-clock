document.addEventListener('DOMContentLoaded', () => {
    let currentTime = Date.now()
    console.log(currentTime)
    let today = new Date(Date.now())

    let hour
    let hourRot = 90

    let minute
    let minuteRot = 90

    let second
    let secondRot = 90 

    console.log(today)
    console.log(today.getHours())
    console.log(today.getMinutes())
    console.log(today.getSeconds())

    const setHourHand = () => {
        if (today.getHours() >= 12) {
            hours = today.getHours() - 12 + today.getMinutes()/60
        } else {
            hour = today.getHours() + today.getMinutes()/60
        }
        hourRot = ((hours/12) * 360) + 90
        const hourHand = document.getElementsByClassName('hour-hand')[0]
        hourHand.style.transform = `rotate(${hourRot}deg)`
    }

    const setMinuteHand = () => {
        minute = today.getMinutes() + today.getSeconds()/60
        minuteRot = ((minute/60) * 360) + 90
        const minuteHand = document.getElementsByClassName('min-hand')[0]
        minuteHand.style.transform = `rotate(${minuteRot}deg)`
    }

    const setSecondHand = () => {
        second = today.getSeconds()
        secondRot = ((second/60) * 360) + 90
        const secondHand = document.getElementsByClassName('second-hand')[0]
        secondHand.style.transform = `rotate(${secondRot}deg)`
    }

    const updateTime = () => {
        setInterval(() => {
            today = new Date(Date.now())
            setHourHand()
            setMinuteHand()
            setSecondHand()
            updateTime()
            console.log({minute, minuteRot, second, secondRot, hour, hourRot})
        }, 1 * 1000)
    }

    setHourHand()
    setMinuteHand()
    setSecondHand()
    updateTime()
})