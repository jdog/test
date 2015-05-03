J.addWait(
	"test.tools.blur"
	, [ "test" ]
	, function(ref) {

		var f = new Function()

		return function blur(e_element, notCanceled, canceled) {

			var event = new MouseEvent('blur', {
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

