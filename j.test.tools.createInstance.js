J.addWait(
	"test.tools.CreateInstance"
	, [ "test" ]
	, function(ref) {

		return function CreateInstance(thingToTest, refObject, params) {
			var constructor = thingToTest( refObject )
			return constructor.apply(this, params)
		}

	})

