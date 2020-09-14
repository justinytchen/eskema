import { newGuid } from '../../util/ObjectUtils';
import { WidgetType } from '../../util/WidgetType';

const demoBoards = {
    "demo1": {
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum ipsum sed purus dictum, eu aliquam est pulvinar. Cras interdum in velit vel bibendum.",
        "widgets": [
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
        ]
    },
    "demo2": {
        "description":"Pellentesque at blandit urna. Vestibulum augue purus, viverra eget sapien non, convallis iaculis tellus. ",
        "widgets": [
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
        ]
    },
    "demo3": {
        "description":"In feugiat consectetur faucibus. Suspendisse luctus urna eu velit aliquet accumsan. Cras sit amet lobortis est. Mauris eu tempor purus. ",
        "widgets": [
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
    }
};


export { demoBoards };