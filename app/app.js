/**
 * Created by max on 05/08/15.
 */
angular.module('angularjs-client-template',[
    'ui.router',
    'ui.bootstrap'
]);

angular.module('angularjs-client-template').config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

    //$httpProvider.interceptors.push('CustomHttpSettings');

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url:"/home",
            templateUrl:"controllers/home/home.html",
            controller:"HomeController"
        })
        // .state('dashboard', {
        //     url:'/dashboard',
        //     templateUrl: 'app/controllers/dashboard/main.html'
        // })
        // .state('dashboard.blank',{
        //     url:'/blank',
        //     templateUrl:'app/controllers/dashboard/blankPage/blank.html',
        //     controller:'BlankController'
        // })
        // .state('dashboard.tasks',{
        //     url:'/tasks',
        //     views: {
        //         "": {
        //             templateUrl: 'app/controllers/dashboard/tasks/tasks.html'
        //         },
        //         "listTasks@dashboard.tasks" : {
        //             template:'<list-tasks></list-tasks>',
        //             controller: "ListTasksDirectiveController"
        //         },
        //         "newTasks@dashboard.tasks" : {
        //             template:'<new-tasks></new-tasks>',
        //             controller: "NewTasksDirectiveController"
        //         }
        //     }
        // })
        // .state('dashboard.systemSettings',{
        //     url:'/systemsettings',
        //     views: {
        //         "" : {
        //             templateUrl:'app/controllers/dashboard/systemSettings/systemSettings.html'
        //         },
        //         "emailAccounts@dashboard.systemSettings" : {
        //             template:'<email-accounts></email-accounts>',
        //             controller: "EmailAccountsDirectiveController"
        //         },
        //         "urlItems@dashboard.systemSettings" : {
        //             template:'<url-items></url-items>',
        //             controller: "UrlItemsDirectiveController"
        //         },
        //         "mailServer@dashboard.systemSettings" : {
        //             template:'<mail-server></mail-server>',
        //             controller: "MailServerDirectiveController"
        //         },
        //         "fakeTemplates@dashboard.systemSettings" : {
        //             template:'<fake-templates></fake-templates>',
        //             controller: "FakeTemplatesDirectiveController"
        //         },
        //         "scenarioTemplate@dashboard.systemSettings" : {
        //             template: '<scenario-template></scenario-template>',
        //             controller: "ScenarioTemplateDirectiveController"
        //         },
        //         "relayServer@dashboard.systemSettings" : {
        //             template: '<relay-server></relay-server>',
        //             controller: "RelayServerDirectiveController"
        //         }
        //     }
        // })
        // .state('dashboard.emailTemplates', {
        //     url:'/emailTemplates',
        //     views: {
        //         "" : {
        //             templateUrl:'app/controllers/dashboard/emailTemplates/emailTemplates.html'
        //         },
        //         "commonEmailTemplates@dashboard.emailTemplates" : {
        //             template:'<common-email-templates></common-email-templates>',
        //             controller: "CommonEmailTemplatesDirectiveController"
        //         },
        //         "fakeAttachLikeImageEmailTemplates@dashboard.emailTemplates" : {
        //             template:'<fake-attach-like-image-email-templates></fake-attach-like-image-email-templates>',
        //             controller: "FakeAttachLikeImageEmailTemplatesDirectiveController"
        //         }
        //
        //     }
        // })
        .state('403', {
            url:"/403",
            templateUrl: "app/templates/error/403.html"
        });

}]);

angular.module('angularjs-client-template').run(["$rootScope", "$state", function($rootScope, $state) {
    $state.go('home');
}]);
