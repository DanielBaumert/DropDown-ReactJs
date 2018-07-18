const items = [
 "itemA",
 "itemB",
  "itemC"
]

//=============================================
ReactDOM.render(
    <div style={{ display: "inline-flex" }}>
        <DropDown title={items[0]} items={items} readOnly toggeled />
        <DropDown title={items[0]} items={items} toggeled />
        <DropDown title="custom" items={items} toggeled />
    </div>
   ,document.getElementById('root')
);  
