J.addWait(
	"test.tools.focus"
	, [ "test" ]
	, function(ref) {

		var f = new Function()

		return function click(e_element, notCanceled, canceled) {

			var event = new MouseEvent('focus', {
				'view': window,
				'bubbles': true,
				'cancelable': true
			})

			if (!e_element.dispatchEvent(event))
				(canceled || f)()
			else
				(notCanceled || f)()

			return e_element

		}

	})
