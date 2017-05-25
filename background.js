(function(tabs, runtime) {
    var shr = "?share=1";

    runtime.onMessage.addListener(
        function(request, sender) {
            var url = sender.tab.url;
            if (request.action == "quoraLoaded") {
                var notdone = url.indexOf(shr) !== -1;
                if (!notdone) {
                    tabs.update(sender.tab.id, {
                        url: url + shr
                    });
                }
            }
        });
})(chrome.tabs, chrome.runtime);