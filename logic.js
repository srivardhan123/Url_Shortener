let btn = document.getElementById("shorten");

btn.addEventListener('click',short);

async function short()
{
    let longUrl = document.getElementById("longurl").value;
    let response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
    if(response.ok)
    {
        const data = await response.text();
        document.getElementById('shorturl').value = data;
    }else
    {
        document.getElementById('shorturl').innerHTML = "Error Occured While Converting longURL into tinyURL...";
    }
}

let btn1 = document.getElementById("copy");

btn1.addEventListener('click',copy);

async function copy()
{
    let copiedText = document.getElementById('shorturl');
    copiedText.select();
    document.execCommand("copy");
    document.getElementById("display").innerHTML = "Text Copied";
    setTimeout(() => {
        document.getElementById("display").innerHTML = "";
      }, 3000);
}
