function ScrollToElement(elmselector , intance = 0){
    const elm = document.querySelectorAll(elmselector)
    if (elm.length > intance){
        elm[intance].scrollIntoView({behavior : 'smooth'})
    }
}

const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')


link1.addEventListener('click' ,() => {
    ScrollToElement('.Banner')
})
link2.addEventListener('click' ,() => {
    ScrollToElement('.content')
})
link3.addEventListener('click' ,() => {
    ScrollToElement('.destination')
})
link4.addEventListener('click' ,() => {
    ScrollToElement('.Banner',1)
})
link5.addEventListener('click' ,() => {
    ScrollToElement('.content',1)
})
link6.addEventListener('click' ,() => {
    ScrollToElement('.destination',1)
})