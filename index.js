require("babel-register")({
	presets	: ["es2015", "react", "stage-0"],
	plugins	: ["transform-decorators-legacy", "transform-runtime"]
});

require("./app");
