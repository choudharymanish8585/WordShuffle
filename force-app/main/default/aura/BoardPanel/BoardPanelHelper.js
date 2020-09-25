({
    addResultRecord: function (component, result) {
        const action = component.get("c.addResult");
        action.setParams({
            result,
            mode: component.get("v.selectedMode").toUpperCase()
        });
        action.setCallback(this, function (response) {
            const state = response.getState();
            if (state !== "SUCCESS") {
                console.error("Error in saving the record");
            }
        });
        $A.enqueueAction(action);
    },

    showToast: function (title, message, type) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title,
            message,
            type
        });
        toastEvent.fire();
    }
});
