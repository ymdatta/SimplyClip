let sampleText = "Sample Copied Text!";

function mockCopyToClipboard(text){
    navigator.clipboard.writeText(text);
    button1.focus();
    button1.click();
}

function mockCopyToChromeStorage(){
    navigator.clipboard.writeText(sampleText);
    chrome.storage.sync.get(['list'], clipboard => {
        let list = clipboard.list;
        list.push("Sample Copied Text!");
        chrome.storage.sync.set({'list':list},()=>{
            console.log("Button 1 was clicked and entry added");
        })
    });
}

function mockDeleteListEntry( text ){
    chrome.storage.sync.get(['list'], clipboard => {
        let list = clipboard.list;
        let textIndex = list.indexOf(text);
        if(textIndex!= -1){
            list.splice(textIndex);
        }
        chrome.storage.sync.set({ 'list': list } , ()=>{
            console.log("Chrome Storage updated");
        })
    })
}

let button1 = document.getElementById("storageTest");
button1.addEventListener("click",(e)=>{
    mockCopyToChromeStorage();
})

let button2 = document.getElementById("deleteTest");
button2.addEventListener("click",(e)=>{
    mockDeleteListEntry(sampleText);
})

let button3 = document.getElementById("copyFirstEntry");
button3.addEventListener("click",(e)=>{
    console.log("Button 3 clicked");
    mockCopyToClipboard(sampleText);
})

button3.focus();
button3.click();

//Test to delete the added entry
// button2.focus();
// button2.click();