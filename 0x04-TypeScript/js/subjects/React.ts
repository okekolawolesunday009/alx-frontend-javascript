/// <reference path="Teacher.ts" />

namespace Student {
	export interface Teacher {
		experienceTeachReact?: number;
	}
	class ReactClass extends Student {
		getRequirements(): string{
			return "Here is the list of requirements for React";
		}
		getAvailableTeacher():string {
			const z = this.teacher.experienceTeachReact;
			if (z > 0) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return "No available teacher";
			}
		}
	}
}
