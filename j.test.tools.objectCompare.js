// this is part of the suit for j.test
// we only need the part that attaches tests
// keep this file small since it doesn't do anything but attach

J.addWait(
	"test.tools.objectCompare"
	, [ "window.console", "test" ]
	, function(ref) {

		function toShortString(obj) {
			var split = obj.toString().split("()")[0].split("function ")[1]
			if (split === "(e,t){return new x.fn.init(e,t,r)}") {
				return "jQuery"
			} else {
				return split
			}
		}

		return function comparer(module, propertiesWithTypes) {

			var truthy = true
				, run = true

			function compare(module, propertiesWithTypes) {

				console.groupCollapsed("%ccomparer details", "color:gray; font-weight:normal")

				if (!module) {
					console.error("length: ", x, "\u2716")
					return console.groupEnd()
				}

				for (var x in propertiesWithTypes)
				(function loop ( prop, thing, comparedTo ) {

					run = true

					if (comparedTo.empty) {
						if (thing !== undefined) {
							console.error("value: ", prop, "\u2716")
							console.info("value expected: undefined")
							console.info("value returned:", thing)
							truthy = false
						} else {
							console.log("value: ", prop, "\u2714")
						}
					}

				if (comparedTo.obj && (J.getType(thing) === "Obj" || J.getType(thing) === "Arr")) {
					return compare(thing, comparedTo.obj)
				}

					if (run && comparedTo.like) {
						if (J.getType(thing) !== J.getType(comparedTo.like)) {
							console.error("likeness: ", x, "\u2716")
							console.info("value expected:", J.getType(comparedTo.like))
							console.info("value returned:", J.getType(thing))
							truthy = false
						} else {
							console.log(prop, "likeness: ", "\u2714", J.getType(thing))
						}
					}

					if (run && comparedTo.length !== undefined) {
						if (thing.length !== comparedTo.length) {
							console.error("length: ", x, "\u2716")
							console.info("value is :", thing.length)
							truthy = false
						} else {
							console.log(prop, "length: ", "\u2714", thing.length)
						}
					}

					if (run && typeof comparedTo.value !== "undefined") {
						if (thing !== comparedTo.value) {
							console.error("value: ", prop, "\u2716")
							console.info("value expected:", comparedTo.value)
							console.info("value returned:", thing)
							truthy = false
						} else {
							console.log(prop, "value: ", "\u2714", comparedTo.value)
						}
					}

				}( x, module[x], propertiesWithTypes[x] ))

				console.groupEnd()

			}

			compare(module, propertiesWithTypes)

			return truthy

		}

	})


