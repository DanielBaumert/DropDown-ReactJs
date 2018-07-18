
/*********************************************/
/* Const Values
/*********************************************/
const displayTyps = [
    "block",
    "contents",
    "flex",
    "flow-root",
    "grid",
    "inherit",
    "initial",
    "inline",
    "inline-block",
    "inline-flex",
    "inline-grid",
    "inline-table",
    "list-item",
    "none",
    "table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-footer-group",
    "table-header-group",
    "table-row",
    "table-row-group",
    "unset"
];
const positionTyps = [
    "absolute",
    "fixed",
    "inherit",
    "initial",
    "relative",
    "static",
    "sticky",
    "unset"
];
const floatTyps = [
    "inherit",
    "initial",
    "left",
    "none",
    "right",
    "unset",
];
/*********************************************/
/* Icons
/*********************************************/
const IconArrowDown = <path className="icon-arrow-down" d="M-12 -4 L-8 -4 L0 5 L8 -4 L12 -4 L0 9 Z" />;
const IconArrowUp = <path className="icon-arrow-up" d="M-12 4 L-8 4 L0 -5 L8 4 L12 4 L0 -9 Z" />;

function IconLoader(props) {
    return (
        <svg
            height={+props.height ? props.height : "30px"}
            width={+props.width ? props.width : "30px"}
            viewBox={`-15 -15 ${+props.width ? props.width : "30"} ${+props.width ? props.width : "30"}`}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            {props.iconPath}
        </svg>);
}

/*********************************************/
/* Controls
/*********************************************/
class ToggleButton extends React.Component {

    getPath() {
        return <g>
            <path d='M4 0 L12 0 Q15 2 12 4 L9 4 L4 4 Q 0 2 1 2Z' />
            {/* <path d='M18 2 C-2 2 -2 30 18 30 L50 30 C70 30 70 2 50 2 Z' /> */}
            {/* <circle r="5" style={{ fill: "#11111" }} /> */}
        </g>;
    }

    render() {
        return (
            <div>
                <IconLoader iconPath={this.getPath()} ></IconLoader>
            </div>
        );
    }

}

class RadioButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            select: !!props.select
        };
        this.onClickEvent = this.onClickEvent.bind(this);
    }

    getSelector() {
        return (
            <g>
                <circle r="35%" />
                <circle r={this.state.select ? 20 + `%` : 0} />
            </g>
        );
    }

    onClickEvent(ignore) {
        this.setState(prevState => ({
            select: !prevState.select
        }));
    }

    render() {
        return (
            <div className="ed-radio-btn" onClick={this.onClickEvent}>
                <IconLoader height={25} width={25} iconPath={this.getSelector()}></IconLoader><div>{this.props.text}</div>
            </div>
        );
    }
}

//=============================================
ReactDOM.render(
    <div style={{ display: "grid" }}>          {/*asdsad*/}
        <div className="ed-inline">
            <RadioButton text="select me please!" />
            <RadioButton text="select me please!" select />
        </div>
        <div className="ed-inline">
            <ToggleButton></ToggleButton>
        </div>
        <div className="ed-inline">
            <DropDown title="settings" items={displayTyps} readOnly toggeled />
            <DropDown title="settings" items={positionTyps} toggeled />
            <DropDown title="settings" items={floatTyps} toggeled />
        </div>
    </div>
    , document.getElementById('root')
);  