/**
 * helper for building html tag
 * @param el
 * @returns
 */
function element(el) {
    
	this.elementText = el;
    this.el = "<"+el;
    this.startTagClosed = false;
    
    /**
     * close the html tag
     * once tag is closed, then its not available for any more edits
     */
    this.close = function() {
    	if (!this.startTagClosed) {
    		this.el += "></"+this.elementText+">";
    	} else {
    		this.el += "</"+this.elementText+">";
    	}
        return this;
    };
    
    /**
     * return html tag as String.
     * typically once you are done with building tag and closed it
     * you will do yield() to get the tag`s String representation
     */
    this.yield = function () {
        return this.el;
    };
	/**
	 * add `id` attribute to tag
	 */ 
	this.addId = function(id) {
		this.el += " id='" +id+"'";
		return this;
	};
	
	/**
	 * add `name` attribute to tag
	 */ 
	this.addName = function(name) {
		this.el += " name='" +name + "'";
		return this;
	};
	
	/**
	 * add `maxlenght` attribute to tag
	 */ 
	this.addMaxLength = function(maxLength) {
		this.el += " maxlength='" + maxlength +"'";
		return this;
	};
	
	/**
	 * add any arbitrary attribute to tag, `style` etc
	 */ 
	this.addAttrib = function(attrib, value) {
		this.el += " " + attrib + "='" + value +"'";
		return this;
	};
	
	/**
	 * add value attribute to tag
	 */ 
	this.addValue = function(value) {
		this.el += " value='" + value + "'";
		return this;
	};
	
	/**
	 * add innerHTML to tag,
	 * this is used for container tags like span, div etc
	 */ 
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
