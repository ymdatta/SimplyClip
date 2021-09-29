let _clipboardList = document.querySelector("#clipboard_list");
function getClipboardText(){
	chrome.storage.sync.get(['list'],clipboard=>{
        let list = clipboard.list;
        console.log("Inside getting list:--", list )
        let emptyDiv = document.getElementById('empty-div');
        
        if(list===undefined || list.length===0){
            
            emptyDiv.classList.remove('hide-div');

        }else{
        emptyDiv.classList.add('hide-div');
        if (typeof list !== undefined)
        list.forEach(item => {
            console.log(item);
            addClipboardListItem(item)
        });
    }
    });

}
