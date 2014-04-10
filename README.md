Document Object Model (DOM) Events & Creation


FIRST use of...
	APPEND
		-Insert content, specified by the parameter, to the end of each element in the set of matched elements.
	
	PREPEND
		-Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.

In-class exercise
1) Create an HTML page
2) On page load, dynamically add a UL
3) Create a JS Array that contains a list of string s that are your favorite movies.
4) Using DOM creation, append an LI for each title in the array to the dynamically created UL


FIRST use of...
	BEFORE
		-Insert content, specified by the parameter, before each element in the set of matched elements.

	AFTER
		-Insert content, specified by the parameter, after each element in the set of matched elements.

	EMPTY
		-Remove all child nodes of the set of matched elements from the DOM.

NON-DELEGATED EVENT
	$(selector).on(event, callback)
		ONE & DONE

DELEGATED EVENT
	$(static object).on(event, selector, callback)
		POLYMORPHIC
