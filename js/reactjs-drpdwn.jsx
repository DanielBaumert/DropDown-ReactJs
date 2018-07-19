const IconArrowDown = <path className="icon-arrow-down" d="M-12 -4 L-8 -4 L0 5 L8 -4 L12 -4 L0 9 Z" />;
const IconArrowUp = <path className="icon-arrow-up" d="M-12 4 L-8 4 L0 -5 L8 4 L12 4 L0 -9 Z" />;

class DropDown extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            title: props.title,
            toggeled: props.toggeled || false,
            readOnly: +props.readOnly,
            items: props.items,
            selectIndex: props.selectIndex || 0
        };
        this.onClickEvent = this.onClickEvent.bind(this);
        this.itemClick = this.itemClick.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onWheelEvent = this.onWheelEvent.bind(this);
    }

    onClickEvent() {
        this.setState(prevState => ({
            toggeled: !prevState.toggeled
        }));

    }

    getToogledClass() {
        return !this.state.toggeled && 'ed-hide';
    }

    itemClick(e) {
        let title = e.currentTarget.innerHTML();
        this.setState(prevState => ({
            title: title,
            toggeled: !prevState.toggeled
        }));
    }

    onChangeEvent(e) {
        if (this.state.readOnly)
            return;
        let value = e.currentTarget.value;
        this.setState(ignore => ({
            title: value,
            selectIndex: -1,
        }));
    }

    setEditable(value) {
        this.setState(ignore => ({
            readOnly: value,
        }))
    }

    onWheelEvent(e) {
        var step = Math.round(e.deltaY / 100),
            itemCount = this.state.items.length,
            selectIndex = step > 0
                ? this.state.selectIndex + step >= itemCount
                    ? Math.abs(-itemCount + this.state.selectIndex + step)
                    : this.state.selectIndex + step
                : this.state.selectIndex + step < 0
                    ? itemCount - Math.abs(this.state.selectIndex + step)
                    : this.state.selectIndex + step;

        this.setState(prevState => ({
            selectIndex: selectIndex,
            title: prevState.items[selectIndex]
        }));
    }

    render() {
        let cls = this.props.className || "ed-drpdwn";

        const DropDownItem = function (props) {
            return (
                <div className={`${cls}-itm`} onClick={props.click} key={props.index.toString()}>{props.text}</div>
            );
        };
        return (
            <div className={cls}>
                <div onWheel={this.onWheelEvent} className={`${cls}-head`}>
                    <input className={`${cls}-title`} onChange={this.onChangeEvent} value={this.state.title} readOnly={!!this.props.readOnly} ></input>
                    <div className={`${cls}-aniWrp`} onClick={this.onClickEvent}>
                        <svg
                            height={+this.props.height ? this.props.height : "30px"}
                            width={+this.props.width ? this.props.width : "30px"}
                            viewBox={`-15 -15 ${+this.props.width ? this.props.width : "30"} ${+this.props.width ? this.props.width : "30"}`}
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink">
                            {this.state.toggeled ? IconArrowDown : IconArrowUp}
                        </svg>
                    </div>
                </div>
                <div className={`${cls}-body ${this.getToogledClass()}`}>
                    {this.props.items.map((x, i) => <DropDownItem index={i} click={this.itemClick} text={x}></DropDownItem>)}
                </div>
            </div >
        );
    }
}
