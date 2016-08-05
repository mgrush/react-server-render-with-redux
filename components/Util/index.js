"use strict";

module.exports	= {
	renderHtml	: function(options){
		return `
			<html>
				<head>
					<title>${options.title || ""}</title>
				</head>
				<body>
					<div id="root">${options.content || ""}</div>

					<script type="text/javascript">
						window.__INITIAL_STATE__ = ${JSON.stringify(options.initState)}
					</script>
					<script type="text/javascript" src="/pages/index.js"></script>
				</body>
			</html>
		`;
	}
};
