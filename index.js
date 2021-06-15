class Message {
    constructor(){
        this.notification = {}
    }

    _message(type, options){
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }
        return this._render(options.content, options.duration, type);
    }

    _render(content = '', duration = 2, type = 'info') {
        const contentBox = this._getContentBox()
        const messageDOM = this._getMsgHtml(type, content)
        contentBox.appendChild(messageDOM);
        this._removeMsgTimer(contentBox, messageDOM, duration)
    }

    _removeMsgTimer(contentBox, messageDOM, duration){
        setTimeout(() => {
            messageDOM.className = 'box animate__animated animate__fadeOutUp'
            messageDOM.style.height = 0
        }, duration * 1000);

        setTimeout(() => {
            contentBox.removeChild(messageDOM)
        }, duration * 1000  + 400);
    }

    _getIcon(type = 'info'){
        const map = {
           info :`<svg style="color:#2db7f5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>`,
           success:`<svg style="color:#19be6b"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
         </svg>`,
           warning:`<svg style="color:#ff9900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>`,
           error:`<svg style="color:#ed4014" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
         </svg>`,
           loading:`<svg style="color:#2db7f5" xmlns="http://www.w3.org/2000/svg" class="loading" viewBox="0 0 20 20" fill="currentColor">
           <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
         </svg>`
        }
        return map[type]
    }

    _getMsgHtml(type = 'info', content = ''){
        const messageDOM = document.createElement("div")
        messageDOM.className = 'box animate__animated animate__fadeInDown'
        messageDOM.style.height = 36 + 'px'
        messageDOM.innerHTML = `
                <div class="message" >
                ${this._getIcon(type)}
                <div class="content-text">${content}</div>
            </div>
        `
        return messageDOM
    }

    _getContentBox(){
        const boxId = 'messageBox'
        if(document.querySelector('#' + boxId)){
            return document.querySelector('#' + boxId)
        }else{
            const contentBox = document.createElement("div")
            contentBox.id = boxId
            document.body.appendChild(contentBox)
            return contentBox
        }
    }

    info (options) {
        return this._message('info', options);
    }
    success (options) {
        return this._message('success', options);
    }
    warning (options) {
        return this._message('warning', options);
    }
    error (options) {
        return this._message('error', options);
    }
    loading (options) {
        return this._message('loading', options);
    }
    destroy () {
        this.notification = null;
    }
}









