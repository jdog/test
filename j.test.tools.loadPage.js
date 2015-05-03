J.addWait(
	"test.tools.loadPage"
	, [ "test" ]
	, function(ref) {

		return function loadPage($iframe, url, callback) {

			// lazily load this part
			J.wait("test.tools.getPage", ref, function() {
				$iframe[0].src = url
				ref.getPage($iframe, callback)
			})

		}

})
