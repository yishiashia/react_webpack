import React from 'react';

function getCSRFContent() { 
	var metas = document.getElementsByTagName('meta'); 

	for (var i=0; i<metas.length; i++) { 
		if (metas[i].getAttribute("property") == "csrftoken") { 
			return metas[i].getAttribute("content"); 
		} 
	} 

	return "";
}

var csrftoken = getCSRFContent();

class CSRFToken extends React.Component {

	constructor(props) {
    	super(props);
	}

	render() {
	    return (
	        <input type="hidden" name="_csrf" value={csrftoken} />
	    );
	}
};

export default CSRFToken;