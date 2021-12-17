/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"AppFiorialuno04/appfiorialuno04/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
