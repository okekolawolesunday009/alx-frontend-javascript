interface MajorCredits {
    credits: number;
    brand: 'MajorCredits'; // Unique identifier for MajorCredits
}

interface MinorCredits {
    credits: number;
    brand: 'MinorCredits'; // Unique identifier for MinorCredits
}

export function sumMajorCredits (subject1: MajorCredits, subject2MinorCredits) {
	return (subject1.credits + subject2.credits);

}

export function sumMinorCredits (subject1: MinorCredits, subject2:MinorCredits) {
	return (subject1.credits + subject2.credits);

}
