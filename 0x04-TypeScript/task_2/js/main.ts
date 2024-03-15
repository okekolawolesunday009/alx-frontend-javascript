export interface DirectorInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workDirectorTasks(): string;
}
export interface TeacherInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workTeacherTasks(): string;
}

class Director implements DirectorInterface {
        constructor(){}
        workFromHome(): string {
                return "Working from home"
        }
        getCoffeeBreak(): string {
                return "Cannot have a break"
        }
        workDirectorTasks(): string {
                return "Getting to work"
        }
}

export class Teacher implements TeacherInterface {
        constructor(){}
        workFromHome(): string {
                return "Working from home"
        }
        getCoffeeBreak(): string {
                return "Cannot have a break"
        }
        workTeacherTasks(): string {
                return "Getting to work"
        }
}

export function createEmployee  (salary: string | number ): Director | Teacher {
        if((typeof salary === 'number') && (salary < 500)) {
                return new Teacher();
        } else {
                return new Director();
        }

}

export function isDirector(employee: Director | Teacher):employee is Director  {
	return employee instanceof Director;

}
export function executeWork(employee: Director | Teacher): void {
	if (!isDirector(employee)) {
		console.log(employee.workTeacherTasks());
	} else {
		console.log("Getting  to director tasks");
	}

}

type Subjects = 'Math' | 'History';

export function teachClass (subject: Subjects): void {
	(subject === 'Math') ? 
		console.log("Teaching Math") : 
		console.log("Teaching History");
}
