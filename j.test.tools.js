J.load(
		J._.t + "j.test.tools.injectJQuery.js"
	,	J._.t + "j.test.tools.getPage.js"
	,	J._.t + "j.test.tools.loadPage.js"
	,	J._.t + "j.test.tools.objectCompare.js"
	,	J._.t + "j.test.tools.flag.js"
	,	J._.t + "j.test.tools.click.js"
	,	J._.t + "j.test.tools.focus.js"
	,	J._.t + "j.test.tools.buildRoot.js"
	,	J._.t + "j.test.tools.createInstance.js"
	,	J._.t + "j.test.tools.focus.js"
	,	J._.t + "j.test.tools.blur.js"
	,	J._.t + "j.test.tools.remove.js"
	,	J._.t + "j.test.tools.swapLib.js"
	,	J._.t + "j.test.tools.submit.js"
	, true, true)
J.addWait(
	"~test.allToolsLoaded" // announce all of the tools are loaded
	, [
		  "test.tools.loadPage"
		, "test.tools.getPage"
		, "test.tools.objectCompare"
		, "test.tools.flag"
		, "test.tools.click"
		, "test.tools.focus"
		, "test.tools.blur"
		, "test.tools.remove"
		, "test.tools.SwapLib"
		, "test.tools.BuildRoot"
		, "test.tools.CreateInstance"
		, "test.tools.submit"
		, "test.tools.injectJQuery"
	]
	, function(ref) {
		return true
	})
