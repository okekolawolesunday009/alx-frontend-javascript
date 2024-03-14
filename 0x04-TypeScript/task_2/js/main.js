"use strict";
exports.__esModule = true;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to work";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Working from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if ((typeof salary === 'number') && (salary < 500)) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
exports.createEmployee = createEmployee;
function isDirector(employee) {
    return employee instanceof Director;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (!isDirector(employee)) {
        console.log(employee.workTeacherTasks());
    }
    else {
        console.log("Getting  to director tasks");
    }
}
exports.executeWork = executeWork;
function teachClass(subject) {
    (subject === 'Math') ?
        console.log("Teaching Math") :
        console.log("Teaching History");
}
exports.teachClass = teachClass;
