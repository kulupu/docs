$(document).ready(function () {
    console.log("readyyyyy");

    const words = ["Proof of Work.",
    "Based on Substrate.",
    "On-chain Governance.",
    "Forkless Upgrades.",
    "Actor-based Smart Contracts."];
    let i = 0;
    let timer;

    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function () {
            if (word.length > 0) {
                document.getElementById('word').innerHTML += word.shift();
            } else {
                deletingEffect();
                return false;
            };
            timer = setTimeout(loopTyping, 100);
        };
        loopTyping();
    };

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function () {
            if (word.length > 0) {
                word.pop();
                document.getElementById('word').innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                };
                typingEffect();
                return false;
            };
            timer = setTimeout(loopDeleting, 100);
        };
        loopDeleting();
    };

    typingEffect();

    var _CONTENT = [
        "Proof of Work.",
        "Based on Substrate.",
        "On-chain Governance.",
        "Forkless Upgrades.",
        "Actor-based Smart Contracts."
    ];

    // Current sentence being processed
    var _PART = 0;

    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;

    // Element that holds the text
    var _ELEMENT = document.querySelector("#text");

    // Cursor element 
    var _CURSOR = document.querySelector("#cursor");

    // Implements typing effect
    function Type() {
        // Get substring with 1 characater added
        var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;

        // If full sentence has been displayed then start to delete the sentence after some time
        if (text === _CONTENT[_PART]) {
            // Hide the cursor
            _CURSOR.style.display = 'none';

            clearInterval(_INTERVAL_VAL);
            setTimeout(function () {
                _INTERVAL_VAL = setInterval(Delete, 50);
            }, 1000);
        }
    }

    // Implements deleting effect
    function Delete() {
        // Get substring with 1 characater deleted
        var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;

        // If sentence has been deleted then start to display the next sentence
        if (text === '') {
            clearInterval(_INTERVAL_VAL);

            // If current sentence was last then display the first one, else move to the next
            if (_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;

            _PART_INDEX = 0;

            // Start to display the next sentence after some time
            setTimeout(function () {
                _CURSOR.style.display = 'inline-block';
                _INTERVAL_VAL = setInterval(Type, 100);
            }, 200);
        }
    }

    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);

    var images = [`<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#4c4c4c" d="M23 14.5L31.5 6L40 14.5L31.5 23ZM48.5 6L57 14.5L48.5 23L40 14.5ZM57 65.5L48.5 74L40 65.5L48.5 57ZM31.5 74L23 65.5L31.5 57L40 65.5ZM6 31.5L14.5 23L23 31.5L14.5 40ZM65.5 23L74 31.5L65.5 40L57 31.5ZM74 48.5L65.5 57L57 48.5L65.5 40ZM14.5 57L6 48.5L14.5 40L23 48.5Z"></path><path fill="#b2e5c8" d="M23 23L6 23L6 14.5ZM57 23L57 6L65.5 6ZM57 57L74 57L74 65.5ZM23 57L23 74L14.5 74Z"></path><path fill="#66cc91" d="M23 23L40 23L40 34.9L29.8 29.8L34.9 40L23 40ZM57 23L57 40L45.1 40L50.2 29.8L40 34.9L40 23ZM57 57L40 57L40 45.1L50.2 50.2L45.1 40L57 40ZM23 57L23 40L34.9 40L29.8 50.2L40 45.1L40 57Z"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#a8387c" d="M23 14.5L31.5 6L40 14.5L31.5 23ZM48.5 6L57 14.5L48.5 23L40 14.5ZM57 65.5L48.5 74L40 65.5L48.5 57ZM31.5 74L23 65.5L31.5 57L40 65.5ZM6 31.5L14.5 23L23 31.5L14.5 40ZM65.5 23L74 31.5L65.5 40L57 31.5ZM74 48.5L65.5 57L57 48.5L65.5 40ZM14.5 57L6 48.5L14.5 40L23 48.5Z"></path><path fill="#e8bad5" d="M6 6L23 6L23 23ZM74 6L74 23L57 23ZM74 74L57 74L57 57ZM6 74L6 57L23 57Z"></path><path fill="#d175ac" d="M23 23L40 23L40 40L23 40ZM29.1 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 23L57 40L40 40L40 23ZM42 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 57L40 57L40 40L57 40ZM42 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M23 57L23 40L40 40L40 57ZM29.1 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#7a38a8" d="M25.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M25.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0"></path><path fill="#d5bae8" d="M6 23L6 6L14.5 6ZM57 6L74 6L74 14.5ZM74 57L74 74L65.5 74ZM23 74L6 74L6 65.5Z"></path><path fill="#ab75d1" d="M23 23L40 23L40 25.7L32.9 40L23 40ZM57 23L57 40L54.3 40L40 32.9L40 23ZM57 57L40 57L40 54.3L47.1 40L57 40ZM23 57L23 40L25.7 40L40 47.1L40 57Z"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#e8bac9" d="M25.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M25.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0"></path><path fill="#d17594" d="M23 6L23 23L14.5 23ZM74 23L57 23L57 14.5ZM57 74L57 57L65.5 57ZM6 57L23 57L23 65.5ZM30 34a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M42 34a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M42 46a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M30 46a4,4 0 1,1 8,0a4,4 0 1,1 -8,0"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#e8e8e8" d="M40 6L40 23L31.5 23ZM57 23L40 23L40 14.5ZM40 74L40 57L48.5 57ZM23 57L40 57L40 65.5ZM23 23L23 40L14.5 40ZM74 40L57 40L57 31.5ZM57 57L57 40L65.5 40ZM6 40L23 40L23 48.5Z"></path><path fill="#d17585" d="M6 23L6 6L14.5 6ZM57 6L74 6L74 14.5ZM74 57L74 74L65.5 74ZM23 74L6 74L6 65.5ZM23 23L40 23L40 40L23 40ZM29.1 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 23L57 40L40 40L40 23ZM42 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 57L40 57L40 40L57 40ZM42 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M23 57L23 40L40 40L40 57ZM29.1 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#dfe5b2" d="M25.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M25.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0"></path><path fill="#c0cc66" d="M8.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M23 23L40 23L40 31.5L23 31.5ZM23 31.5L31.5 31.5L31.5 40L23 40ZM40 31.5L31.5 40L31.5 31.5ZM57 23L57 40L48.5 40L48.5 23ZM48.5 23L48.5 31.5L40 31.5L40 23ZM48.5 40L40 31.5L48.5 31.5ZM57 57L40 57L40 48.5L57 48.5ZM57 48.5L48.5 48.5L48.5 40L57 40ZM40 48.5L48.5 40L48.5 48.5ZM23 57L23 40L31.5 40L31.5 57ZM31.5 57L31.5 48.5L40 48.5L40 57ZM31.5 40L40 48.5L31.5 48.5Z"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#e3e3e3" d="M40 6L40 23L23 23ZM57 23L40 23L40 6ZM40 74L40 57L57 57ZM23 57L40 57L40 74ZM23 23L23 40L6 40ZM74 40L57 40L57 23ZM57 57L57 40L74 40ZM6 40L23 40L23 57Z"></path><path fill="#59bfc7" d="M6 6L23 6L23 23ZM74 6L74 23L57 23ZM74 74L57 74L57 57ZM6 74L6 57L23 57ZM23 23L40 23L40 40L23 40ZM29.1 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 23L57 40L40 40L40 23ZM42 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 57L40 57L40 40L57 40ZM42 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M23 57L23 40L40 40L40 57ZM29.1 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#5b5b5b" d="M40 14.5L31.5 23L23 14.5L31.5 6ZM48.5 23L40 14.5L48.5 6L57 14.5ZM40 65.5L48.5 57L57 65.5L48.5 74ZM31.5 57L40 65.5L31.5 74L23 65.5ZM23 31.5L14.5 40L6 31.5L14.5 23ZM65.5 40L57 31.5L65.5 23L74 31.5ZM57 48.5L65.5 40L74 48.5L65.5 57ZM14.5 40L23 48.5L14.5 57L6 48.5Z"></path><path fill="#9a84d6" d="M14.5 23L6 14.5L14.5 6L23 14.5ZM57 14.5L65.5 6L74 14.5L65.5 23ZM65.5 57L74 65.5L65.5 74L57 65.5ZM23 65.5L14.5 74L6 65.5L14.5 57ZM23 23L40 23L40 40L23 40ZM29.1 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 23L57 40L40 40L40 23ZM42 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 57L40 57L40 40L57 40ZM42 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M23 57L23 40L40 40L40 57ZM29.1 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#d1759c" d="M23 23L23 6L31.5 6ZM40 6L57 6L57 14.5ZM57 57L57 74L48.5 74ZM40 74L23 74L23 65.5ZM6 40L6 23L14.5 23ZM57 23L74 23L74 31.5ZM74 40L74 57L65.5 57ZM23 57L6 57L6 48.5Z"></path><path fill="#545454" d="M14.5 23L6 14.5L14.5 6L23 14.5ZM57 14.5L65.5 6L74 14.5L65.5 23ZM65.5 57L74 65.5L65.5 74L57 65.5ZM23 65.5L14.5 74L6 65.5L14.5 57Z"></path><path fill="#e8e8e8" d="M23 23L40 23L40 25.7L32.9 40L23 40ZM57 23L57 40L54.3 40L40 32.9L40 23ZM57 57L40 57L40 54.3L47.1 40L57 40ZM23 57L23 40L25.7 40L40 47.1L40 57Z"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#4c4c4c" d="M40 6L40 23L23 23ZM57 23L40 23L40 6ZM40 74L40 57L57 57ZM23 57L40 57L40 74ZM23 23L23 40L6 40ZM74 40L57 40L57 23ZM57 57L57 40L74 40ZM6 40L23 40L23 57Z"></path><path fill="#a7cc66" d="M6 14.5L14.5 6L23 14.5L14.5 23ZM65.5 6L74 14.5L65.5 23L57 14.5ZM74 65.5L65.5 74L57 65.5L65.5 57ZM14.5 74L6 65.5L14.5 57L23 65.5ZM23 23L40 23L40 31.5L23 31.5ZM23 31.5L31.5 31.5L31.5 40L23 40ZM40 31.5L31.5 40L31.5 31.5ZM57 23L57 40L48.5 40L48.5 23ZM48.5 23L48.5 31.5L40 31.5L40 23ZM48.5 40L40 31.5L48.5 31.5ZM57 57L40 57L40 48.5L57 48.5ZM57 48.5L48.5 48.5L48.5 40L57 40ZM40 48.5L48.5 40L48.5 48.5ZM23 57L23 40L31.5 40L31.5 57ZM31.5 57L31.5 48.5L40 48.5L40 57ZM31.5 40L40 48.5L31.5 48.5Z"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#2e8c68" d="M40 6L40 23L23 23ZM57 23L40 23L40 6ZM40 74L40 57L57 57ZM23 57L40 57L40 74ZM23 23L23 40L6 40ZM74 40L57 40L57 23ZM57 57L57 40L74 40ZM6 40L23 40L23 57Z"></path><path fill="#59c79c" d="M6 6L23 6L23 23ZM74 6L74 23L57 23ZM74 74L57 74L57 57ZM6 74L6 57L23 57Z"></path><path fill="#ace3cd" d="M23 23L40 23L40 25.7L32.9 40L23 40ZM57 23L57 40L54.3 40L40 32.9L40 23ZM57 57L40 57L40 54.3L47.1 40L57 40ZM23 57L23 40L25.7 40L40 47.1L40 57Z"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#545454" d="M25.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M25.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0"></path><path fill="#b875d1" d="M6 23L6 6L14.5 6ZM57 6L74 6L74 14.5ZM74 57L74 74L65.5 74ZM23 74L6 74L6 65.5ZM30 34a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M42 34a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M42 46a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M30 46a4,4 0 1,1 8,0a4,4 0 1,1 -8,0"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#e5e5e5" d="M25.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M25.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0"></path><path fill="#4c4c4c" d="M6 23L6 6L23 6ZM57 6L74 6L74 23ZM74 57L74 74L57 74ZM23 74L6 74L6 57Z"></path><path fill="#a9cc66" d="M23 23L40 23L40 40L23 40ZM29.1 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 23L57 40L40 40L40 23ZM42 33.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M57 57L40 57L40 40L57 40ZM42 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0M23 57L23 40L40 40L40 57ZM29.1 46.5a4.4,4.4 0 1,0 8.8,0a4.4,4.4 0 1,0 -8.8,0"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#c1c6ea" d="M25.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M42.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M25.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 31.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 48.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0"></path><path fill="#848dd6" d="M6 23L6 6L23 6ZM57 6L74 6L74 23ZM74 57L74 74L57 74ZM23 74L6 74L6 57ZM40 31.5L40 40L31.5 40ZM48.5 40L40 40L40 31.5ZM40 48.5L40 40L48.5 40ZM31.5 40L40 40L40 48.5Z"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#4c4c4c" d="M23 6L40 6L40 14.5ZM57 6L57 23L48.5 23ZM57 74L40 74L40 65.5ZM23 74L23 57L31.5 57ZM6 23L23 23L23 31.5ZM74 23L74 40L65.5 40ZM74 57L57 57L57 48.5ZM6 57L6 40L14.5 40Z"></path><path fill="#73cc66" d="M8.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 14.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M59.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M8.8 65.5a5.7,5.7 0 1,1 11.3,0a5.7,5.7 0 1,1 -11.3,0M23 23L40 23L40 31.5L23 31.5ZM23 31.5L31.5 31.5L31.5 40L23 40ZM40 31.5L31.5 40L31.5 31.5ZM57 23L57 40L48.5 40L48.5 23ZM48.5 23L48.5 31.5L40 31.5L40 23ZM48.5 40L40 31.5L48.5 31.5ZM57 57L40 57L40 48.5L57 48.5ZM57 48.5L48.5 48.5L48.5 40L57 40ZM40 48.5L48.5 40L48.5 48.5ZM23 57L23 40L31.5 40L31.5 57ZM31.5 57L31.5 48.5L40 48.5L40 57ZM31.5 40L40 48.5L31.5 48.5Z"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#5b5b5b" d="M31.5 6L40 14.5L31.5 23L23 14.5ZM57 14.5L48.5 23L40 14.5L48.5 6ZM48.5 74L40 65.5L48.5 57L57 65.5ZM23 65.5L31.5 57L40 65.5L31.5 74ZM14.5 23L23 31.5L14.5 40L6 31.5ZM74 31.5L65.5 40L57 31.5L65.5 23ZM65.5 57L57 48.5L65.5 40L74 48.5ZM6 48.5L14.5 40L23 48.5L14.5 57Z"></path><path fill="#eaeaea" d="M23 14.5L14.5 23L6 14.5L14.5 6ZM65.5 23L57 14.5L65.5 6L74 14.5ZM57 65.5L65.5 57L74 65.5L65.5 74ZM14.5 57L23 65.5L14.5 74L6 65.5Z"></path><path fill="#9684d6" d="M23 23L40 23L40 25.7L32.9 40L23 40ZM57 23L57 40L54.3 40L40 32.9L40 23ZM57 57L40 57L40 54.3L47.1 40L57 40ZM23 57L23 40L25.7 40L40 47.1L40 57Z"></path></svg>`, `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><path fill="#3d62b7" d="M40 23L23 23L23 14.5ZM40 23L40 6L48.5 6ZM40 57L57 57L57 65.5ZM40 57L40 74L31.5 74ZM23 40L6 40L6 31.5ZM57 40L57 23L65.5 23ZM57 40L74 40L74 48.5ZM23 40L23 57L14.5 57Z"></path><path fill="#849dd6" d="M23 6L23 23L6 23ZM74 23L57 23L57 6ZM57 74L57 57L74 57ZM6 57L23 57L23 74Z"></path><path fill="#c1ceea" d="M23 23L40 23L40 25.7L32.9 40L23 40ZM57 23L57 40L54.3 40L40 32.9L40 23ZM57 57L40 57L40 54.3L47.1 40L57 40ZM23 57L23 40L25.7 40L40 47.1L40 57Z"></path></svg>`,]

    $.get('https://kulupu-api.herokuapp.com/members', function (response) {
        console.log(response);
        response.forEach((element, index) => {
            var template = `<div style="text-align: center; margin-top: 50px;" class="col-sm-3 single-member" data-aos="zoom-in">
            ${images[index]}
            <h5 class="council-title">${element.info.display.Raw}</h5>
            <p>${element.info.legal.Raw != null ? `<i class="fas fa-user green-logo"></i> ${element.info.legal.Raw}` : ``}</p>
            <p>${element.info.twitter.Raw != null ? `<i class="fab fa-twitter green-logo"></i> ${element.info.twitter.Raw}` : ``}</p>
            <p>${element.info.email.Raw != null ? `<i class="fas fa-envelope-open-text green-logo"></i> ${element.info.email.Raw}` : ``}</p>
            <p>${element.info.web.Raw != null ? `<i class="fas fa-link green-logo"></i> ${element.info.web.Raw}` : ``}</p>
            <p>${element.info.riot.Raw != null ? `<i class="fas fa-comment green-logo"></i> ${element.info.riot.Raw}` : ``}</p>
            <p class="council-description">2eeTYXTedvyzCaP9sLJ1oExdqHKLHburZR5endQW9VBbShBU</p>
          </div>`
            $('.spinner-border').remove()
            $('#members-klp').append(template)
        });
    })
})