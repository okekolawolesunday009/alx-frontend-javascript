/// <reference path="./crud.d.ts" />

import{ RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
	firstName :"Guillaume",
	lastName: "Salva"
};
//insertrow
const newRowID: RowID = CRUD.insertRow(row);

//update
const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
//delete row
CRUD.deleteRow(125);

