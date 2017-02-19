"use strict";
/**
 * Student
 */
var Student = (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        var l = this.func("Ubskanannadiediezehumdreht");
    }
    Student.prototype.func = function (firstname) {
        return firstname.length;
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.js.map