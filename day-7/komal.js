function colours(){
    var mycolours={noofcolours:12,totalShades:50}
    localStorage.setItem("mycolours",JSON.stringify(mycolours))
    alert("colours successfully added")
    return

}
function Retrivecolours() {
    const coloursFromLs = JSON.parse(localStorage.getItem("mycolours"))
    console.log(coloursFromLs, "- colours here")
    alert(`${coloursFromLs.noOfcolours} - no of colours`)
    return
}

function Deletecolours() {
    localStorage.removeItem("mycolours");
    alert("colours are deleted successfully done.")
}
