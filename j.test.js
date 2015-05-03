J.extend(function(puppy, dog, log) {
	if (!dog.test) dog.test = { } // make sure it's in the prototype
})

J.load(
	J._.t + "j.test.buildTest.js"
	,	J._.t + "j.test.codeCoverage.js"
	,	J._.t + "j.test.finishedResults.js"
	, J._.t + "j.test.tools.js")

// we are only extending J.test
J.wait(
	"window.console"
	, "test.buildTest"
	, "test.CodeCoverage"
	, "test.finishedResults"
	, "test.allToolsLoaded"
	, { }
	, function(ref) {

		var dtest = J.test

		if (!dtest.allTestFiles) dtest.allTestFiles = []
		if (!dtest.allTestMapsFlipped) dtest.allTestMapsFlipped = {}
		if (!dtest.allTestMaps) dtest.allTestMaps = {}

		// clean this as we split it up
		;(function(mergeObj) {
			for (var x in mergeObj) dtest[x] = mergeObj[x]
		}({
				results : []
				, buildTest : ref.buildTest
				, finishedResults : ref.finishedResults
				, codeCoverage : ref.CodeCoverage()
				, hasCodeCoverage : false
				, _onFinished : []
				, onFinished : function(func) { dtest._onFinished.push(func) }
				, activeTests : []
				, index : 0
				, _testData : J._.testData = { }
				, totalPass : 0
				, totalFail : 0
			}))

		dtest.onFinished(dtest.finishedResults)

		dtest.integrationTest = function() {
			var args = Array.prototype.slice.call(arguments, 0);
			args.push(true)
			args.unshift("integrationTest")
			dtest.buildTest.apply(this, args)
		}

		dtest.run = function run(ignore, arr) {

			dtest.codeCoverage.clear()

			dtest.results.length = 0

			if (arr.length)
				dtest.activeTests = dtest.activeTests.concat( arr )
			else
				dtest.activeTests = dtest.activeTests.concat( dtest.allTestFiles )

			console.group("%c犬%c test details", "font-size:30px; font-weight:normal; color:black; ", "font-size:25px; color:rgb(232, 186, 38); font-weight:normal;")
			innerRunSubTests( dtest.activeTests.shift() )
			return "Release the Kraken!"
		}

		function innerRunSubTests(path) {
			dtest.lastTest = path
			J.load(path, true)
			console.group(path)
			console.group("tests")
		}

})
