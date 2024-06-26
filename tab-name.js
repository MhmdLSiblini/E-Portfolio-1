let originalTitle = document.title;
let intervalId;
let toggleState = 0;

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        intervalId = setInterval(function() {
            if (toggleState === 0) {
                document.title = "Don't forget about me! ☝️";
                toggleState = 1;
            } else if (toggleState === 1) {
                document.title = "Future Employee Here! 🖐️";
                toggleState = 2;
            } else {
                document.title = originalTitle;
                toggleState = 0;
            }
        }, 3000);
    } else {
        clearInterval(intervalId);
        document.title = originalTitle;
        toggleState = 0;
    }
});
