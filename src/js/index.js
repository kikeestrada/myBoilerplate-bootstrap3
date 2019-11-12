import {hello, bye} from "./modules/example"
import {bFilter} from "./modules/bFilter"
import {toolTip} from "./modules/toolTop"
import {popover} from "./modules/popover"


hello();
bye();
bFilter();
toolTip();
popover();

(()=>{
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('page2')) {
		// functions here
	}else if (document.body.classList.contains('page3')) {
		// functions here
	}
})();
