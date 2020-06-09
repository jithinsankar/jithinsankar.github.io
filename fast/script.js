function live() {
  var site = document.getElementById("content-input").value;
    if (site!="")
      {
        document.getElementById("nmap").innerHTML ="nmap -sV -sT -sC -o nmapinitial " + site
        document.getElementById("sql").innerHTML ="sqlmap -u "+ site +" --dbs";
        document.getElementById("gobuster").innerHTML = "gobuster dir -u  "+site+" -w /usr/share/wordlists/dirb/common.txt -x php"
      }
    else{
      document.getElementById("nmap").innerHTML = ""
      document.getElementById("sql").innerHTML =""
      document.getElementById("gobuster").innerHTML = ""
    }
  }

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}


function copyText(id){
copyToClipboard(document.getElementById(id).innerHTML)
  
  var x = document.getElementById("snackbar");
  x.innerHTML = "✅ Copied " + id + " command"
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  document.getElementById(id).style.fontsize="60px";

  console.log(document.getElementById(id).style.fontsize)
}