chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "activate_justifeye") {
            jQuery('p, li').fadeOut().promise().done(
                function () {
                    jQuery('p, li').css('text-align', 'justify').fadeIn();
                }
            );
        } else {
            jQuery('p, li').fadeOut().promise().done(
                function () {
                    jQuery('p, li').css('text-align', 'initial').fadeIn();
                }
            );
        }
    }
);