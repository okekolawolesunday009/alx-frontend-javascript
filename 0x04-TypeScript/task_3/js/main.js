"use strict";
/// <reference path="./crud.d.ts" />
exports.__esModule = true;
var CRUD = require("./crud");
var row = {
    firstName: "Guillaume",
    lastName: "Salva"
};
//insertrow
var newRowID = CRUD.insertRow(row);
//update
var updatedRow = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
//delete row
CRUD.deleteRow(125);
