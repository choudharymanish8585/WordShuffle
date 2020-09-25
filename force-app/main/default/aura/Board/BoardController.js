({
    generateBoard: function (component, event, helper) {
        // get game mode
        const gameMode = component.get("v.mode");
        const columns = gameMode && gameMode === "hard" ? 6 : gameMode === "medium" ? 4 : 3;
        // set block width
        component.set("v.blockWidth", 12 / columns);
        // get blocks words
        const wordObjArr = helper.getWords(columns * columns);
        component.set("v.words", wordObjArr);
        // set random winning word
        component.set("v.winWord", helper.getWinWord(wordObjArr));
        // reset board
        helper.resetBoard(component);
    },

    onClickHandler: function (component, event, helper) {
        let clickCount = component.get("v.clickCount") + 1;
        const value = event.getParam("value");

        if (value === component.get("v.winWord")) {
            helper.disableBoard(component);
            // player win
            component.set("v.result", "YOU WIN");
            helper.fireResultEvent(component, "win");
        } else if (clickCount === 3) {
            helper.disableBoard(component);
            // player lose
            component.set("v.result", "YOU LOSE");
            helper.fireResultEvent(component, "lose");
        }
        // update click count
        component.set("v.clickCount", clickCount);
    },

    //aura method
    reshuffleBoard: function (component, event, helper) {
        // randomize the words
        component.set("v.words", helper.randomizeArray(component.get("v.words")));
        // reset board
        helper.resetBoard(component);
    }
});
