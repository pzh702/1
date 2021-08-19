function reverseSentence(str) {
	//student a am I =>I am a student
	return str.split(" ").reverse().join(" ");
}

let a = reverseSentence("student a am I");
console.log(a);
