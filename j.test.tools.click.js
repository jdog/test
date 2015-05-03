J.addWait(
	"test.tools.click"
	, [ "test" ]
	, function(ref) {

		var f = new Function()

		return function click(e_element, notCanceled, canceled) {

			var event = new MouseEvent('click', {
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
