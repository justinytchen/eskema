const WidgetData = {
    "NumberWidget":{name: "Number"}, 
    "TextFieldWidget":{name: "Text Field"},
};
Object.freeze(WidgetData);

const types = Object.keys(WidgetData);
var WidgetType = {}
for(var i = 0; i < types.length; i++){
    WidgetType[types[i]] = i;
}
Object.freeze(WidgetType);

export {WidgetData, WidgetType};