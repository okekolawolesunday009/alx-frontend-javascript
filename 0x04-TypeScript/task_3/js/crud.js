"use strict";
exports.__esModule = true;
function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
}
exports.insertRow = insertRow;
function deleteRow(rowId) {
    console.log('Delete row id', rowId);
    return;
}
exports.deleteRow = deleteRow;
function updateRow(rowId, row) {
    console.log("Update row " + rowId, row);
    return rowId;
}
exports.updateRow = updateRow;
