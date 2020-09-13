import { newGuid } from '../../util/ObjectUtils';
import { WidgetType } from '../../util/WidgetType';

const demoBoards = {
    "demo1": {
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum ipsum sed purus dictum, eu aliquam est pulvinar. Cras interdum in velit vel bibendum. Nam et mi sollicitudin purus feugiat elementum in vulputate ex. Curabitur arcu felis, malesuada at magna sed, cursus dictum enim. Suspendisse id ipsum lectus. Nam suscipit fringilla ullamcorper. Duis eget tellus nec diam vehicula lobortis. Phasellus vehicula leo in mi lacinia ornare. Aenean efficitur nisi vitae fringilla gravida. Aenean pretium lacinia lectus, sed feugiat purus pharetra vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a tincidunt nibh. In hac habitasse platea dictumst. Integer blandit sapien sed viverra viverra.",
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
        "description":"Pellentesque at blandit urna. Vestibulum augue purus, viverra eget sapien non, convallis iaculis tellus. Phasellus vehicula nulla sed mauris convallis scelerisque. In hac habitasse platea dictumst. Pellentesque ac leo ac sem efficitur elementum. Nullam fermentum id sem eu porttitor. Cras vestibulum, ipsum ut dictum dignissim, diam enim vehicula est, vitae euismod ipsum odio eget odio. Integer interdum ligula purus, quis finibus magna finibus in. Suspendisse sed mauris tincidunt, fringilla lacus vel, dignissim ipsum. Nullam eu semper lectus. Quisque non consequat purus. Sed porttitor urna dolor, nec maximus nisi cursus eget. Fusce elit ex, dignissim at lobortis ut, posuere sit amet urna. Praesent tincidunt tincidunt quam, consequat mattis libero elementum non. Vivamus convallis sit amet risus a pellentesque.",
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
        "description":"In feugiat consectetur faucibus. Suspendisse luctus urna eu velit aliquet accumsan. Cras sit amet lobortis est. Mauris eu tempor purus. Vivamus id nunc sit amet elit dapibus elementum. Praesent non erat cursus, tristique ex sed, convallis nisl. Nunc feugiat justo at leo malesuada finibus id at lectus. Curabitur sit amet ante sed ipsum ultrices porttitor.",
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