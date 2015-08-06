/*!
 * Module dependencies.
 */

var cordova = require('./helper/cordova'),
    pushNotification = require('../www'),
    execSpy,
    execWin,
    options;

/*!
 * Specification.
 */

describe('phonegap-plugin-push', function() {
    beforeEach(function() {
        execWin = jasmine.createSpy();
        execSpy = spyOn(cordova.required, 'cordova/exec').andCallFake(execWin);
    });

    describe('PushNotification', function() {
        it("should exist", function() {
            expect(pushNotification).toBeDefined();
            expect(typeof pushNotification == 'object').toBe(true);
        });

        it("should contain a init function", function() {
            expect(pushNotification.init).toBeDefined();
            expect(pushNotification.init == 'function').toBe(true);
        });

        it("should contain a unregister function", function() {
            expect(pushNotification.unregister).toBeDefined();
            expect(pushNotification.unregister == 'function').toBe(true);
        });

        it("should contain a setApplicationIconBadgeNumber function", function() {
            expect(pushNotification.setApplicationIconBadgeNumber).toBeDefined();
            expect(typeof pushNotification.setApplicationIconBadgeNumber == 'function').toBe(true);
        });
    });
});
