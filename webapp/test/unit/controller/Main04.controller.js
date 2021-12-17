/*global QUnit*/

sap.ui.define([
	"AppFiorialuno04/appfiorialuno04/controller/Main04.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Main04 Controller");

	QUnit.test("I should test the Main04 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
