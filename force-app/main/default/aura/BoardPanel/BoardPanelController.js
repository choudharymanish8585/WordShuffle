({
    startGame: function (component, event, helper) {
        const combobox = component.find("modeCombobox");
        const currentSelectedMode = component.get("v.selectedMode");
        component.set("v.selectedMode", combobox.get("v.value"));
        if (currentSelectedMode) {
            const boardComp = component.find("board");
            boardComp && boardComp.startGame();
        }
    },

    reshuffleBoard: function (component, event, helper) {
        const boardComp = component.find("board");
        boardComp && boardComp.reshuffleBoard();
        component.set("v.reshuffleDisable", true);
    },

    onResultHandler: function (component, event, helper) {
        const result = event.getParam("result");
        if (result && result === "win") {
            component.set("v.reshuffleDisable", true);
            helper.addResultRecord(component, "Win");
            helper.showToast("You Win", "Hooray!", "success");
        } else {
            component.set("v.reshuffleDisable", false);
            helper.addResultRecord(component, "Lose");
            helper.showToast("You Lose", "Reshuffle to keep playing", "error");
        }
    }
});
