({
    onClickHandler: function (component, event, helper) {
        const currentValue = component.get("v.open");
        if (!currentValue) {
            component.set("v.open", true);

            // fire event
            var compEvent = component.getEvent("onclick");
            compEvent.setParams({ value: component.get("v.label") });
            compEvent.fire();
        }
    },

    scriptsLoaded: function (component, event, helper) {
        //Method definition goes here
        console.log("Loaded");
        //$(".board-block").FluidFontType();
        fitText(component.getElement(".board-block"));
    }
});
