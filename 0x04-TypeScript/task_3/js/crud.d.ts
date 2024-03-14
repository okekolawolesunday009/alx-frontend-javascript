import { RowID, RowElement } from './interface';

declare namespace CRUD {
	type Insert =  (data: RowElement) => number;
	type Update = (id: RowID, data: RowElement) => void;
	type Delete = (id: RowID) => void;
}
export default CRUD;
