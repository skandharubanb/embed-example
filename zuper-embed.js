(function(global) {
    class ZuperEmbedJS {
        constructor(targetOrigin = '*') {
            this.targetOrigin = targetOrigin;
        }

        sendMessage(message) {
            if (window.parent && window.parent.postMessage) {
                window.parent.postMessage(message, this.targetOrigin);
            } else {
                console.warn('postMessage is not supported or window.parent is not available.');
            }
        }
    }

    // Expose the class to the global object
    global.ZuperEmbedJS = ZuperEmbedJS;
})(window);
