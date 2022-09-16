document.addEventListener("DOMContentLoaded",()=>{
    const btn_shopcar = document.querySelector("body > section > header.mainnav-wrapper > div.mainnav-right-block > div > div.shopcar-section > button")
    const popout_shopcar = document.querySelector("body > section > header.mainnav-wrapper > div.mainnav-right-block > div > div.shopcar-section > div")
    btn_shopcar.addEventListener("click",()=>{
        const display = popout_shopcar.getAttribute("aria-display")
        const returndisplay = display==="true" ? "false" : "true"
        popout_shopcar.setAttribute("aria-display",returndisplay)
    })

    const btn_menu = document.querySelector("#btn-mainnav-menu")
    const right_block = document.querySelector("body > section > header.mainnav-wrapper > div.mainnav-right-block > div")
    btn_menu.addEventListener("click",()=>{
        const display = right_block.getAttribute("aria-expanded")
        const returndisplay = display==="true" ? "false" : "true"
        right_block.setAttribute("aria-expanded",returndisplay)
    })

})