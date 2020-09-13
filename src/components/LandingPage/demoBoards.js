import { newGuid } from '../../util/ObjectUtils';
import { WidgetType } from '../../util/WidgetType';

const demoBoards = {
    "demo1": [
        {
            id: newGuid(),
            widgetType: WidgetType.NumberWidget,
            selected: false,
            x: 0,
            y: 50,
            width: "auto",
            height: "auto",
            editMode: true,
            demo: true,
            state: "0"
        },
        {
            id: newGuid(),
            widgetType: WidgetType.NumberWidget,
            selected: false,
            x: 0,
            y: 100,
            width: "auto",
            height: "auto",
            editMode: false,
            demo: true,
            state: "0"
        },
        {
            id: newGuid(),
            widgetType: WidgetType.TextFieldWidget,
            selected: false,
            x: 50,
            y: 50,
            width: "auto",
            height: "auto",
            editMode: false,
            demo: true,
            state: "asdfasdf"
        }
    ],
    "demo2": [
        {
            id: newGuid(),
            widgetType: WidgetType.NumberWidget,
            selected: false,
            x: 0,
            y: 50,
            width: "auto",
            height: "auto",
            editMode: false,
            demo: true,
            state: "0"
        },
        {
            id: newGuid(),
            widgetType: WidgetType.TextFieldWidget,
            selected: false,
            x: 50,
            y: 50,
            width: "auto",
            height: "auto",
            editMode: false,
            demo: true,
            state: "asdfasdf"
        }
    ],
    "demo3": [
        {
            id: newGuid(),
            widgetType: WidgetType.TextFieldWidget,
            selected: false,
            x: 90,
            y: 40,
            width: "auto",
            height: "auto",
            editMode: false,
            demo: true,
            state: "asdfasdf"
        },
        {
            id: newGuid(),
            widgetType: WidgetType.TextFieldWidget,
            selected: false,
            x: 0,
            y: 0,
            width: "auto",
            height: "auto",
            editMode: false,
            demo: true,
            state: "asdfasdf"
        },
        {
            id: newGuid(),
            widgetType: WidgetType.TextFieldWidget,
            selected: false,
            x: 80,
            y: 80,
            width: "auto",
            height: "auto",
            editMode: false,
            demo: true,
            state: "asdfasdf"
        }
    ]
};


export {demoBoards};