/**
 * helper for building html tag
 * @param el
 * @returns
 */
function element(el) {
    
	this.elementText = el;
    this.el = "<"+el;
    this.startTagClosed = false;
    
    this.close = function() {
    	if (!this.startTagClosed) {
    		this.el += "></"+this.elementText+">";
    	} else {
    		this.el += "</"+this.elementText+">";
    	}
        return this;
    };
    
    this.yield = function () {
        return this.el;
    };
	
	this.addId = function(id) {
		this.el += " id='" +id+"'";
		return this;
	};
	
	this.addName = function(name) {
		this.el += " name='" +name + "'";
		return this;
	};
	
	this.addMaxLength = function(maxLength) {
		this.el += " maxlength='" + maxlength +"'";
		return this;
	};
	
	this.addAttrib = function(attrib, value) {
		this.el += " " + attrib + "='" + value +"'";
		return this;
	};
	
	this.addValue = function(value) {
		this.el += " value='" + value + "'";
		return this;
	};
	
	this.addInnerHtml = function(innerHtml) {		
		if (this.startTagClosed) {
			this.el += innerHtml;	
		} else {
			this.el += ">"+innerHtml;
			this.startTagClosed = true;
		}		
		return this;
	};
}
