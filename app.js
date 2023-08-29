const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds');

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30;
    let mn = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;

    hour.style.transform = `rotateZ(${hh + mn / 12}deg)`
    minutes.style.transform = `rotateZ(${mn}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}    

setInterval(clock,1000)



// date and time


const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year');

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),ampm,
    mn = date.getMinutes(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear()

    // converting 24hrs to 12 && setting am pm functionality
    if(hh>=12){
        hh = hh -12;
        ampm = "PM"
    }
    else{
        ampm = "AM"
    }

    if(hh == 0){hh = 12}
    if(hh<10){hh =`0${hh}`}


    if(mn<10){mn = `0${mn}`}


    textHour.innerHTML = `${hh}:`
    textMinutes.innerHTML = `${mn}`
    textAmPm.innerHTML = ampm


    // date month year

    let months = ['Jan', 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]}`
    dateYear.innerHTML = year
}      

setInterval(clockText,1000)


// dark light theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


