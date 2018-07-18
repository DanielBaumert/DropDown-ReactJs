# DropDown-ReactJs

#How to use
```
Website
└───css
│   │   eactjs-drpdwm-style.min.css.map
|
└───scss
│   │   reactjs-drpdwm-style.scss
|
└───js
│   │   reactjs-drpdwn.jsx
|
│   index.html   
```


```html
<script src="js/reactjs-drpdwn.jsx" type="text/babel"></script>
```

```scss
//file reactjs-drpdwm-style.scss
$className: "ed-drpdwn"; //<-------------------------------------------------------------------
$displayClr: silver;                                                                   //     |
$displayBgClr: #505050; //kind of gray                                                 //     |
$drpdwnBgClrBtn: #ff4646; //kind of red                                                //     |
$drpdwnClrItem: silver;                                                                //     |
$drpdwnBgClrItem: #555555; //kind of gray                                              //     |
$drpdwnBgClrItemHover: #353535; //kind of gray                                         //     |
$drpdwnSplitClr: #303030; //kind of gray                                               //     |
$drpdwnArrowUpClr: white; //kind of gray                                               //     |
$drpdwnArrowDownClr: white; //kind of gray                                             //     |
$drpdwnArrowUpAnimation: swipToDown;                                                   //     |
$drpdwnArrowDownAnimation: swipToUp;                                                   //     |
$drpdwnArrowAnimationDuration: 500;                                                    //     |
...                                                                                    //     |
```

```js
///Settings                                                                            //     |
// title the default displayed display text                                            //     |
// items: dropdown items                                                               //     |
// readOnly: the display text is readonly                                              //     |
// toggeled: start with open dropdown                                                  //     |
// className: custrom or "ed-drpdwn" (default)                                         //     |
///////////////////////////////////////////////////////////////////////////////        //     |
                                                                                       //     |
/////////////////////////////////////////                                              //     |
//          Display       // drpdwnBtn //                                              //     | 
/////////////////////////////////////////                                              //     |
//               dropdown              //                                              //     |
//.....................................//                                              //     |
                                                                                       //     |  
//////////////////////////////////////////////////////////////////////////////                |  
const itemsList = ["itemA", "itemB", "itemC"];  //<--------------------------------           |  
ReactDOM.render( {/*                                                              |           |  */}
    <div style={{ display: "inline-flex" }}> {/*                                  |           |  */}
         <DropDown title="settings" items={itemsList} readOnly toggeled /> {/* ---            |  */}
         <DropDown title="settings" items={itemsList} toggeled />                       {/*   |  */}
         <DropDown title="settings" items={itemsList} />                                {/*   |  */} 
         <DropDown className="my-ed-drpdwn-name" title="settings" items={itemsList} />  {/* ---  */}
    </div>
    , document.getElementById('root')
);  
``` 
![singlelineempty](https://github.com/facebamm/DropDown-ReactJs/blob/master/img/drpDwn.png)
