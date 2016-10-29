angular.module('portalApp')
    .controller('crowdmarkCtrl', ['$scope', function($scope) {

        // mock data
        $scope.items = [{
            title: 'Math 135',
            details: [{
                name: "Assignment 1",
                question: [{
                    name: "Question 1",
                    value: "https://i.gyazo.com/f46b2b6d95229a6c014f9840f18a51b5.png"
                }, {
                    name: "Question 2",
                    value: "https://i.gyazo.com/07a0e4a9e276ad25ccaca5e68f7fc64b.png"
                }]
            }, {
                name: "Assignment 2",
                question: [{
                    name: "Question 1",
                    value: "https://i.gyazo.com/39f39b7b1289b3023081e4492167bfa9.png"
                }, {
                    name: "Question 2",
                    value: "https://i.gyazo.com/7579f6f8e406bc9de404a6c252b0a65d.png"
                }]
            }]
        }, {
            title: 'Math 137',
            details: [{
                name: "Assignment 1",
                question: [{
                    name: "Question 1",
                    value: "https://i.gyazo.com/f46b2b6d95229a6c014f9840f18a51b5.png"
                }, {
                    name: "Question 2",
                    value: "https://i.gyazo.com/07a0e4a9e276ad25ccaca5e68f7fc64b.png"
                }]
            }]
        }, {
            title: 'CS 135',
            details: 'Donec id quam eu odio feugiat sagittis. Duis a tempus neque. Praesent elementum quis ante quis commodo. Sed tincidunt aliquet dolor sit amet laoreet. '
        }, ];

        // Show main view in the first column as soon as controller loads
        $scope.portalHelpers.showView('crowdmarkMain.html', 1);

        // This function gets called when user clicks an item in the list
        $scope.showDetails = function(item) {
            // Make the item that user clicked available to the template
            $scope.detailsItem = item;
            $scope.portalHelpers.showView('crowdmarkDetails.html', 2);
        };

        $scope.showDetails2 = function(item) {
            // Make the item that user clicked available to the template
            $scope.details2Item = item;
            $scope.portalHelpers.showView('crowdmarkDetails2.html', 3);
            console.log($scope.details2Item);
        };

    }]);