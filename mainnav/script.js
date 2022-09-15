document.addEventListener("DOMContentLoaded",()=>{
    const btn_shopcar = document.querySelector("body > section > header.mainnav-wrapper > div.mainnav-right-block > div > div.shopcar-section > button")
    const popout_shopcar = document.querySelector("body > section > header.mainnav-wrapper > div.mainnav-right-block > div > div.shopcar-section > div")
    btn_shopcar.addEventListener("click",()=>{
        popout_shopcar.setAttribute("aria-display","true")
    })
    btn_shopcar.addEventListener("focusout",()=>{
        popout_shopcar.setAttribute("aria-display","false")
    })
})