/// <reference path="Teacher.ts" />

namespace Student{
	export interface Teacher {
		experienceTeachingC?: number;
	}
	class Cpp implements Subject {
		getRequirement(): string{
			return "Here is the list of requirements for Cpp";
		}
		getAvailableTeacher():string{
			const z = this.teacher.experienceTeachingC;
			if (z > 0) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return "No available teacher";
			}
		}
	}

\
}
