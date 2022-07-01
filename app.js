const submitBtn = document.getElementById('btn')
const rateScale = document.querySelectorAll('.rate')
const card = document.getElementById('reviewCard')
const message = document.getElementById('message')
const blockEl = document.getElementById('scale')    

rateScale.forEach(x=>{
        
    x.addEventListener('click',()=>{
        blockEl.innerText = `You selected ${x.innerHTML} out of 5`
    })
})
    submitBtn.addEventListener('click',()=>{
        
        card.classList.add('no-show')
        message.classList.add('show')

    })

