var  output, num, denom;
	function myFunction() {
		//create input method using prompt box
       num    =   prompt("Enter Numerator value:", "Numerator");
       denom  =   prompt("Enter Denominator value:", "Denominatorr");
       //test input value  and actions by user
  if (num == null || num == "" || denom == null || denom == "") {
        output = "Client cancelled the prompt.";
		}else{
			//initialise the algorithm function and pass in the numerator and denominator values
	  	algo(num, denom);
	}
}

function algo(x,y) {
	//create the upperBOund and LowerBound of the of the array for the num and denom values.
	var uppBound,lowBound, index;
    if (y == 0){
    	//denominator value is set to zero by user yield error
            output = "error";
            document.getElementById("print").innerHTML = output;
   }else if (x <= 0 && y <= 0  || x >= 0 && y >= 0) {
   	//create div and rem for the  quotien and remainder let allows for block scope
      let div , rem;
     //using _ from the lodash lib call function such as .divide, .floor
      div = _.floor(_.divide(x,y));
      rem = x%y;
      output = "Quotient ="+ div +" Remainder ="+ rem;
      document.getElementById("print").innerHTML = output;
  	}else {
  		//implement a .range from the lodash library to sort from min to max irrespective of who is num or denum.
   	   var list = _.range(_.min(x,y), _.max(x,y)+1);
   	   //set lowBond to index zero and uppBound to the last index, 
   	   lowBound = 0; uppBound = (list.length)-1;
   	   //using while to implemet binary search in the range 
   	   	while ( (uppBound-lowBound)>1 ) {
   		index = _.floor((uppBound+lowBound)/2);
   		if ((list[index]*y)>x) {
   			if (y<0) {lowBound=index}else {
   				uppBound = index;
   			}
   		}else if ((list[index]*y)<x){
   			if (y<0) {uppBound=index}else {
   				lowBound = index;
   			}
   		}
   		//set quotient to the value located in the index of the range after being multiplied by denum but > or < than x
   		var quotient = list[lowBound];

   		var rem 	 = x - (list[lowBound]*y);
   		//set result output
   		output = "The quotient = "+ quotient+" Remainder ="+ rem;
   		 document.getElementById("print").innerHTML = output; 
   	}
  }
}