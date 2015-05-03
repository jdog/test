J.addWait(
	"test.tools.submit"
	, [ "test" ]
	, function(ref) {

		var f = new Function()

		return function click(e_element, notCanceled, canceled) {

			var event = new Event('submit', {
				'view': window,
				'bubbles': false,
				'cancelable': false
			})

			if (!e_element.dispatchEvent(event))
				(canceled || f)()
			else
				(notCanceled || f)()

			return e_element

		}

	})
