angular.module("contactApp")
    .service("ContactDataSvc", function ($http) {

        var self = this;

        // original user data from https://api.randomuser.me/
        this.getContacts = function () {
            return $http.get('http://localhost:3000/contacts')
                .then(function (response) {
                    return response.data;
                });
        };

        this.saveUser = function (data) {
            $http.put('http://localhost:3000/contacts/' + data.id, data);
        };
    });