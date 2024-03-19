const nums = document.querySelectorAll('.code')

codes[0].focus()

codes.array.forEach((code, idx) => {
    code.addEventListener('keydown',(e) => {
        if(e.key >= 0 && e.key <=9) {
            code[idx].value =''
            setTimeout(() => codes[idx +1].focus()
            )
            

        } else if(e.key==='Backspace') {
            setTimeout(() => codes[idx +1].focus()
            )

        }
    })

    
})