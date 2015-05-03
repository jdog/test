J.addWait(
	"test.tools.BuildRoot"
	, [ "test", "DomContentLoaded" ]
	, function(ref) {

		var f = new Function()

		return function BuildRoot(tools, ID) {

			ID = ID || "FARD" + String( Math.random() ).replace(".","")

			var $existing = $("#" + ID)
				, $base = $("<div id='" + ID + "'></div>")

			if ($existing.length) {
				$existing.replaceWith( $base )
			} else {
				$("body").append($base)
			}

			tools.killRoot = function() {
				$base.remove()
				delete tools.$root
			}

			tools.$root = $base
			tools.ROOT_ID = ID

			return $base

		}

	})

