/* list of functions:
// PRINT DATA VALUE TO SCREEN AND CONSOLE - FUNCTION
// COLLECT ALL CSS .style INFORMATION OF THE ELEMENT (INCLUDING EXTERNAL SHEET) -FUNCTION
// ASCII ORDER - FUNCTION
// FIND ALL SAME SPECIFIC PATTERN 'INDEX NUMBER' IN AN ARRAY
// CHECK CSS PROPERTY:VALUE SUPPORT ON CURRENT BROWSER
// LIST ALL HTML ATTRIBUTE AND ATTRIBUTE VALUE OF THE DOM ELEMENT	
*/

/************************************************************/

// PRINT DATA VALUE TO SCREEN AND CONSOLE - FUNCTION

    const printD = html => { 
		document.write(`${html} <hr>`);
		console.log(html);
	};

// printD(html);

/*************************************************************/

// COLLECT ALL CSS .style INFORMATION OF THE ELEMENT (INCLUDING EXTERNAL SHEET) -FUNCTION

    const everyStyles = (DOMelement) => {                 //.1
        const element = DOMelement;
        let outcome = "";
        const elementStyle = element.style;
        const computedStyle = window.getComputedStyle(element, null);

        for (vPropName in elementStyle) {
          if (elementStyle.hasOwnProperty(vPropName)) {
            outcome += `${vPropName} => " ${elementStyle[vPropName]} " <> " ${computedStyle[vPropName]} "\n`;
          }
        }
        return console.log(outcome)
    };

// everyStyles(DOMelement);

    //.1 ensure DOMelement has already inserted index number if necessary
    /* ${elementStyle[vPropName]}  = not sure what this does as it seem to make no difference if i delete it.*/

/*****************************************/

// ASCII ORDER - FUNCTION
       // this is a ascii table chart, for you to test which is greater according to the order list. so in doubt quickly use this to find out
        // var a = "z";
        // var b = "†";

    const ascii = (a, b) => {
      if ( a > b ) {
          console.log(`ASCII result = "${a}" is > greater than "${b}"`);
          }
      else if ( a === b ) {
          console.log(`ASCII result = "${a}" = equals "${b}"`);
          }
      else if( a < b ) {
          console.log(`ASCII result = "${a}" < is less than "${b}"`);
          }
    };

// ascii(a, b);

/*****************************************/

// FIND ALL SAME SPECIFIC PATTERN 'INDEX NUMBER' IN AN ARRAY

/* this is example incase you want more understanding. follow the bottom one to get your result*/

	/* ideal for prompt through list */
	// Finding all the occurrences of an element. copied from MDN
//  var indices = [];
//  var array = ['a', 'b', 'a', 'c', 'a', 'd'];
//  var element = 'a';
//  var idx = array.indexOf(element); // used as index number, starts at 0

//  while (idx != -1) {    // only after it passes "d" that it becomes -1
//    indices.push(idx);     // records all the "a" index number
//    idx = array.indexOf(element, idx + 1); // BIM you can insert an index number after the value and even +1  to continue the loop
//  };

//  printD(indices); // [0, 2, 4]
// useful if you want to find all the same values in an array


/* use this function to get all the same value index numbers in the array*/
	const patternIndexNumber = (theArrayz, searchThisValue) => {
		const patternIndexN = [];
		const array = theArrayz;
		const searchThisV = searchThisValue;
		let ValueIndexN = array.indexOf(searchThisV); 
		
		while (ValueIndexN != -1) {    
			patternIndexN.push(ValueIndexN);                               //.1 
			ValueIndexN = array.indexOf(searchThisV, ValueIndexN + 1);     //.2
		}
		console.log(`this is all the index numbers of you chosen pattern in your array:`);
		console.log(patternIndexN);
	};

	//.1 records all the specific searchThisE index number
	//.2 moves onto the next index number of searchThisE until there is no more
	
//	patternIndexNumber(theArrayz, searchThisValue);
	
/****************************************************/

// CHECK CSS PROPERTY:VALUE SUPPORT ON CURRENT BROWSER

	const cssSupport = (cssProperty, cssValue) => {
		const cssPV = CSS.supports(cssProperty, cssValue);
		
		if (cssPV === true) {
			printD(`"true", your current browser accepts css ${cssProperty}: ${cssValue};`);
		}
		else if (cssPV === false) {
			printD(`"false", your current browser does not accept css ${cssProperty}: ${cssValue};`);
		}
	} 
		/* usually use in conjuction with @supports */

// cssSupport(cssProperty, cssValue);	

/****************************************************/

// LIST ALL HTML ATTRIBUTE AND ATTRIBUTE VALUE OF THE DOM ELEMENT	

	const listAttributes = (DOMnode) => {
		// First, let's verify that the DOMnode has any attributes    
		if (DOMnode.hasAttributes()) {
			const attrsz = DOMnode.attributes;
			let outputz = ``;
			for(let i = 0; attrsz.length > i; i++) {
				outputz += `${attrsz[i].name}="${attrsz[i].value}" ||| `;
			}
			printD(outputz);
		} 
		else {
			printD(`No html attributes to show`);
		}
	};
	
//	listAttributes(DOMnode)

/****************************************************/
