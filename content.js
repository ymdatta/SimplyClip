let _previousData="";
let _maxListSize = 100;
let time_interval_set = undefined;
const readClipboardText = ()=>{
    navigator.clipboard.readText()
    .then(clipboardText=>{
        if(clipboardText.length>0 && clipboardText!==_previousData){
			setClipboardText(clipboardText);
            _previousData = clipboardText
        }
    })
    .catch(err=>console.log(err))
}


const setClipboardText = async (clipText)=>{
    chrome.storage.sync.get("list",function(clipboard){
        let {list} = clipboard;
        console.log("List is:-", list);
        if(typeof list === "undefined")
            list = [];
        if(list.length === _maxListSize){
            list.pop();
        }
		if(list.indexOf(clipText)==-1)
			list.unshift(clipText)
        chrome.storage.sync.set({'list':list},status=>console.log("Debug : Clipboard Text pushed to list"));
    })
}

window.addEventListener('mouseout',function(){
    if(time_interval_set===undefined)
        time_interval_set = setInterval(readClipboardText,2000)
})
window.addEventListener('mouseover',function(){
    clearInterval(time_interval_set);
    time_interval_set=undefined;
})
window.addEventListener('copy',function(){
    readClipboardText();
})
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        clearInterval(time_interval_set);
        time_interval_set=undefined;
    }else{
        if(time_interval_set==undefined)
        time_interval_set = setInterval(readClipboardText,2000);
    }
})
