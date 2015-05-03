J.addWait(
	"test.tools.remove"
	, [ "test" ]
	, function(ref) {

		return function remove (path, base, swap) {
			if (typeof path === "undefined" || typeof path === "object") return
			var arr = path.split(".")
				, x = 0
				, obj = base || J

			if (arr.length < 1) return

			while (x < arr.length) {

				if (x === arr.length - 1) {
					var hold = obj[arr[x]]
					if (swap) {
						obj[arr[x]] = swap
					} else {
						delete obj[arr[x]]
					}
					return hold
				} else {
					if (obj[arr[x]] === undefined) {
						obj = obj[arr[x]] = { }
					} else {
						obj = obj[arr[x]]
					}
				}
				x++
			}
		}

	})

