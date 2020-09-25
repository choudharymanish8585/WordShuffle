({
    disableBoard: function (component) {
        component.set("v.boardDisabled", true);
    },

    enableBoard: function (component) {
        component.set("v.boardDisabled", false);
    },

    getWords: function (count) {
        if (count > 100) return;
        let wordsArray = [
            "expansion",
            "grandfather",
            "nappy",
            "oranges",
            "beds",
            "quack",
            "achiever",
            "yell",
            "hospital",
            "winter",
            "understood",
            "squalid",
            "merciful",
            "reaction",
            "wipe",
            "fearless",
            "tiresome",
            "introduce",
            "planes",
            "drum",
            "muddle",
            "capable",
            "canvas",
            "route",
            "enchanted",
            "quirky",
            "switch",
            "apparatus",
            "loss",
            "agreement",
            "substance",
            "back",
            "oafish",
            "expand",
            "aromatic",
            "quarrelsome",
            "free",
            "useful",
            "raspy",
            "drown",
            "ring",
            "lush",
            "numberless",
            "embarrass",
            "shrill",
            "rice",
            "ice",
            "crow",
            "pumped",
            "sparkle",
            "instruct",
            "girl",
            "glass",
            "frog",
            "murky",
            "impolite",
            "crabby",
            "pin",
            "grade",
            "upbeat",
            "linen",
            "flaky",
            "side",
            "unknown",
            "cactus",
            "round",
            "busy",
            "grab",
            "crush",
            "faithful",
            "mother",
            "clean",
            "unhealthy",
            "event",
            "absent",
            "thoughtless",
            "icy",
            "prefer",
            "charge",
            "confuse",
            "clam",
            "dress",
            "snake",
            "evasive",
            "unit",
            "flow",
            "annoying",
            "gusty",
            "possessive",
            "rhetorical",
            "rule",
            "frantic",
            "farm",
            "poor",
            "possess",
            "men",
            "pleasant",
            "zoom",
            "sidewalk",
            "reply"
        ];

        // Randomize the array
        wordsArray = this.randomizeArray(wordsArray);
        // add open=false attribute
        const wordsObjArray = wordsArray.map((element) => {
            return { word: element, open: false };
        });
        //slice the array and returned request items
        return wordsObjArray.slice(0, count);
    },

    randomizeArray: function (arr) {
        const randomArr = arr;
        // Randomize the array
        for (let i = randomArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = randomArr[i];
            randomArr[i] = randomArr[j];
            randomArr[j] = temp;
        }
        return randomArr;
    },

    //aura method
    resetBoard: function (component) {
        // enable the board
        this.enableBoard(component);
        // reset result
        component.set("v.result", "");
        // reset click count
        component.set("v.clickCount", 0);
    },

    getWinWord: function (wordObjArr) {
        //Method definition goes here
        const randomNum = Math.floor(Math.random() * wordObjArr.length);
        return wordObjArr[randomNum].word;
    },

    fireResultEvent: function (component, result) {
        // fire result application event
        const appEvent = $A.get("e.c:ResultApplicationEvent");
        appEvent.setParams({ result });
        appEvent.fire();
    }
});
