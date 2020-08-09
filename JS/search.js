function myFunction()
{
    var input,textvalue,a;
    input = document.getElementById("search-bar");
    let topics = new Array("bounty","cars","pursuit","infractions","blacklists","tricks");
    for(let i=0;i<topics.length;i++)
    {
        a = topics[i];
        textvalue = a.textContent || a.innerText;
        if (textvalue.toUpperCase().indexOf(input) > -1) {
            topics[i].style.display = "";
        } else {
            topics[i].style.display = "none";
        }
    }
}