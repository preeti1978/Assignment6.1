/*Create  a  Ja va Sc rip t  fil e ap p .j s  an d i nc lude  t hat sc r ip t file  in to yo u r in dex .html file  
using  <sc rip t> t ag . I n ap p .j s file, wri te a J av aSc rip t  p rogr am th at   reads  r adi us f rom 
a v ari able  a nd  c alc ul a tes the  are a o f  a c irc l e a nd p r in ts the  outp u t in  c onsole
.
*/
//read radius as user entered value
//prompt returns a String. With parseFloat weare converting string to float
var r = parseFloat(prompt("Enter radius of circle"));

if (typeof r == "number"){
	//check if entered value is a number
	//Using Math.pow to specify to the power of 2
	var area = 3.14*Math.pow(r,2);
	console.log ("Area = "+area);
	//alert("Area = "+area);
}
else
console.log("Not a number");

