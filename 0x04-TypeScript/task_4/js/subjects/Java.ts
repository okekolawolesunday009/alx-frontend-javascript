/// <reference path="Teacher.ts"> />

namespace Student {
	export interface Teacher {
		experienceTeachingJava?: number;
	}
	class Java extends Student {
		getRequirements(): string{
			return "Here is the list of requirements for Java";
		}
		getAvailableTeacher(): string {
			const z = this.teacher.experienceTeachingJava;
			if (z > 0) {
				return `Available Teacher: ${this.teacher.firstName}`;
			}else {
				return "No available teacher";
			}

		}
	}
}

