times = 10
practiceTime = 20
waitTime = 10

var wait = (s) => {
    var start = new Date().getTime();
    var end = start;
    while (end < start + s * 1000) {
        end = new Date().getTime();
    }
}

var showPractice = () => {
	console.log(practiceTime)
	console.log('%c Start to practice', 'background: green; color: white; display: block;');
	console.log('%c Start to practice', 'background: green; color: white; display: block;');
	console.log('%c Start to practice', 'background: green; color: white; display: block;');
	console.log('%c Start to practice', 'background: green; color: white; display: block;');
	console.log('%c Start to practice', 'background: green; color: white; display: block;');
	console.log('%c Start to practice', 'background: green; color: white; display: block;');
	console.log('%c Start to practice', 'background: green; color: white; display: block;');
	console.log('%c Start to practice', 'background: green; color: white; display: block;');
	console.log('%c Start to practice', 'background: green; color: white; display: block;');
}

var showWait = () => {
	console.log(waitTime)
	console.log('%c Start to consolidate memory', 'background: yellow; color: black; display: block;');
	console.log('%c Start to consolidate memory', 'background: yellow; color: black; display: block;');
	console.log('%c Start to consolidate memory', 'background: yellow; color: black; display: block;');
	console.log('%c Start to consolidate memory', 'background: yellow; color: black; display: block;');
	console.log('%c Start to consolidate memory', 'background: yellow; color: black; display: block;');
	console.log('%c Start to consolidate memory', 'background: yellow; color: black; display: block;');
	console.log('%c Start to consolidate memory', 'background: yellow; color: black; display: block;');
	console.log('%c Start to consolidate memory', 'background: yellow; color: black; display: block;');
	console.log('%c Start to consolidate memory', 'background: yellow; color: black; display: block;');
}

while (times > 0) {
	times--;
	console.clear();
	console.log(times + ' more runs')
	showPractice()
	wait(practiceTime)

	console.clear();
	console.log(times + ' more runs')
	showWait()
	wait(waitTime)
}
