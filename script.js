var a=document.querySelectorAll(".verdict-accepted");
for(let i=0;i<a.length;i++)
{
    chrome.storage.local.get(['key'], function(result) {
        if(result.key)
            cb2(result.key);
      });
}
for(let i=0;i<a.length;i++)
{   
    a[i].addEventListener("click",cb);
}
function cb()
{
    let newVar=prompt("What you want to see");
    chrome.storage.local.set({key: newVar}, function() {
        console.log('Value is set to ' + value);
      });
    cb2(newVar);
}
function cb2(newVar)
{
    for(let i=0;i<a.length;i++)
    {
        a[i].innerHTML=newVar;
    }
}