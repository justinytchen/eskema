import { WidgetType } from '../../util/WidgetType';

const demoBoards = {
    "demo1": [
        {
            id: 0,
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
            id: 1,
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
            id: 2,
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
            id: 0,
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
            id: 2,
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
            id: 2,
            widgetType: WidgetType.TextFieldWidget,
            selected: false,
            x: 50,
            y: 50,
            width: "auto",
            height: "auto",
            editMode: false,
            demo: true,
            state: "asdfasdf"
        },
        {
            id: 2,
            widgetType: WidgetType.TextFieldWidget,
            selected: false,
            x: 50,
            y: 50,
            width: "auto",
            height: "auto",
            editMode: false,
            demo: true,
            state: "asdfasdf"
        },
        {
            id: 2,
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
    ]
};


export {demoBoards};