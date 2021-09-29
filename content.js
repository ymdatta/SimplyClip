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
