/*
MIT License

Copyright (c) 2021 lalit10

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
let _previousData="";
let _maxListSize = 100;
let time_interval_set = undefined;


/**
 * This fucntion reads the text copied text from the chrome storage 
 *
 * @example
 *     readClipboardText('Just SimplyClip')
 */
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

/**
 * This fucntion sets the text copied text and syncs the text to chrome storage
 * Its also stores the text ,urls and old text in the chrome storage
 *
 * @param {string} clipText - text copied from the browser
 *
 * @example
 *     setClipboardText('Just SimplyClip')
 */
const setClipboardText = async (clipText) => {
    chrome.storage.sync.get("list", function (clipboard) {
        chrome.storage.sync.get("listURL", function (clipboardURL) {
            chrome.storage.sync.get("originalList", function (clipboardOriginalList) {
                let { list } = clipboard;
                let { listURL } = clipboardURL;
                let { originalList } = clipboardOriginalList;
                console.log("List is:-", list);
                if (typeof list === "undefined" || list.length == 0) {
                    list = [];
                    listURL = [];
                    originalList = [];
                }
                if (list.length === _maxListSize) {
                    list.pop();
                    listURL.pop();
                    originalList = [];
                }
                if (list.indexOf(clipText) == -1) {
                    list.unshift(clipText);
                    listURL.unshift(window.location.href);
                    originalList.unshift(clipText);
                }
                chrome.storage.sync.set({ 'list': list }, status => console.log("Debug : Clipboard Text pushed to list"));
                chrome.storage.sync.set({ 'listURL': listURL }, status => { console.log("Debug : URL pushed to list") })
                chrome.storage.sync.set({ 'originalList': originalList }, status => console.log("Debug : Original Clipboard Text pushed to list"));
            })
        })
    })
}

/**
 * Event Listener for mouse out
 */
window.addEventListener('mouseout',function(){
    if(time_interval_set===undefined)
        time_interval_set = setInterval(readClipboardText,2000)
})

/**
 * Event Listener for mouse over
 */
window.addEventListener('mouseover',function(){
    clearInterval(time_interval_set);
    time_interval_set=undefined;
})

/**
 * Event Listener for Copy
 */
window.addEventListener('copy',function(){
    readClipboardText();
})

/**
 * Event Listener for visibility change
 */
document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        clearInterval(time_interval_set);
        time_interval_set=undefined;
    }else{
        if(time_interval_set==undefined)
        time_interval_set = setInterval(readClipboardText,2000);
    }
})
