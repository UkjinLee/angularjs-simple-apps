angular.module("contactApp")
    .controller("ContactCtrl", function (ContactDataSvc) {

        var self = this;

        ContactDataSvc.getContacts()
            .then(function (data) {
                self.contacts = data;
            });

        this.selectContact = function (index) {
            this.selectedContact = this.contacts.find( function(contact) {
                return contact.id == index;
            });
            this.editMode = false;
            this.addMode = false;
            this.successMessage = undefined;
            this.failureMessage = undefined;
        };

        this.editMode = false;
        this.addMode = false;

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        };

        this.saveUser = function () {
            this.toggleEditMode();

            if (this.addMode) {
                this.addMode = false;
                ContactDataSvc.createUser(this.selectedContact)
                .then(function (userData) {
                    self.successMessage = "User data successfully updated.";
                    self.contacts.push(userData);
                }, function () {
                    self.failureMessage = "There was an error. Please try again.";
                });
            } else {
                ContactDataSvc.saveUser(this.selectedContact)
                .then(function () {
                    self.successMessage = "User data successfully updated.";
                }, function () {
                    self.failureMessage = "There was an error. Please try again.";
                });
            }
        };

        this.createUser = function () {
            this.selectedContact = {
                "id": new Date().toTimeString()
            };
            this.addMode = true;
            this.editMode = true;
        };
    });