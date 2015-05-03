J.addWait(
	"test.tools.SwapLib"
	, [ "test" ]
	, function(ref) {

		/* used in testing, to swap out existing libraries for mock libraries
		// call it like this
		//	var swap = PAGE.SwapLib({
		//		"Modules.dataService" : {}
		//		, "Modules.commonMessage" : { someMethod : function(){} }
		//		, "Constructors.YourConstructor" : function(){}
		//		, "Constructors.AnotherConstructor" : function(){}
		//	})
		//
		//	then to return, do swap.restore() */
		return function SwapLib(hash, base) {

			base = base || J

			var dog = {
				restore : undefined // function(){}
				, store : {}
			}

			function init() {

				for (var x in hash) {
					dog.store[x] = ref.remove(x, base, hash[x])
				}

			}

			dog.restore = function() {
				for (var x in dog.store) {
					J.add(x, dog.store[x])
					delete dog.store[x]
				}
			}

			J.wait("test.tools.remove", ref, init)

			return dog

		}

	})

