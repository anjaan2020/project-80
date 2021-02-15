function add(){
    var settext = ["name"]
    var gettext = document.getElementById("text").value 

    settext = settext.push(gettext)
    document.getElementById("para1").innerHTML = settext
}