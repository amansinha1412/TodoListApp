import React from 'react'
var BandComponent  =React.createClass({
	render : function(){
	   var testStyle = {fontSize:'18px',marginRight:'20px',color:'green'};
	   return (
             <div style={testStyle}>
              This test is 18px tall        
             </div>
	   )
	}
});
React.render(
  <BandComponent/>,
  document.getElementById('content')
  );