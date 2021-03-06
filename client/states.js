angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.444/tabscool', {
        views: {
            app: {
                controller: 'app_444_tabscool',
                templateProvider: function (app) {
                    return app.templateProvider('app.444.tabscool');
                }
            }
        }
    }).state('app.test', {
        views: {
            app: {
                controller: 'app_test',
                templateProvider: function (app) {
                    return app.templateProvider('app.test');
                }
            }
        }
    }).state('app.tabscool', {
        views: {
            app: {
                controller: 'app_tabscool',
                templateProvider: function (app) {
                    return app.templateProvider('app.tabscool');
                }
            }
        }
    }).state('app.notificationscaptivating', {
        views: {
            app: {
                controller: 'app_notificationscaptivating',
                templateProvider: function (app) {
                    return app.templateProvider('app.notificationscaptivating');
                }
            }
        }
    }).state('app.tabscool1', {
        views: {
            app: {
                controller: 'app_tabscool1',
                templateProvider: function (app) {
                    return app.templateProvider('app.tabscool1');
                }
            }
        }
    });
});