var initialData = [
    { firstName: "Gaby", lastName: "Ramirez", phones: [
        { type: "Mobile", number: "(555) 121-2121" },
        ]
    },
    { firstName: "Saul", lastName: "Ramirez", phones: [
        { type: "Mobile", number: "(555) 444-2222" },
        ]
    }
];
 
var ContactsModel = function(contacts) {
    var self = this;
    self.contacts = ko.observableArray(ko.utils.arrayMap(contacts, function(contact) {
        return { firstName: contact.firstName, lastName: contact.lastName, phones: ko.observableArray(contact.phones) };
    }));
 
    self.addContact = function() {
        self.contacts.push({
            firstName: "",
            lastName: "",
            phones: ko.observableArray()
        });
    };
 
    self.removeContact = function(contact) {
        self.contacts.remove(contact);
    };
 
    self.addPhone = function(contact) {
        contact.phones.push({
            type: "",
            number: ""
        });
    };
 
    self.removePhone = function(phone) {
        $.each(self.contacts(), function() { this.phones.remove(phone) })
    };
 
    self.save = function() {
        self.lastSavedJson(JSON.stringify(ko.toJS(self.contacts), null, 2));
    };
 
    self.lastSavedJson = ko.observable("")
};
 
ko.applyBindings(new ContactsModel(initialData));

$(document).ready(function()
    {
    $(".cero").click(function () {  
      $('#cero ').toggle("slow");
      });
     });
$(document).ready(function()
    {
    $(".uno").click(function () {  
      $('#uno ').toggle("slow");
      });
     });