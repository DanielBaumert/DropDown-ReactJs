# DropDown-ReactJs

#How to use
```js

///Settings
// title the default displayed display text
// items: dropdown items
// readOnly: the display text is readonly
// toggeled: start with open dropdown
///////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////
//          Display       // drpdwnBtn // 
/////////////////////////////////////////
//               dropdown              //
//.....................................//

//////////////////////////////////////////////////////////////////////////////
const itemsList = ["itemA", "itemB", "itemC"];  //<--------------------------------
ReactDOM.render( {/*                                                              | */}
    <div style={{ display: "inline-flex" }}> {/*                                  | */}
         <DropDown title="settings" items={itemsList} readOnly toggeled /> {/* ---  */}
         <DropDown title="settings" items={itemsList} toggeled /> 
         <DropDown title="settings" items={itemsList} />
    </div>
    , document.getElementById('root')
);  
``` 
![singlelineempty](https://github.com/facebamm/DropDown-ReactJs/blob/master/img/drpDwn.png)
