// add whatever parameters you deem necessary
function constructNote(message, letters) {
	const lettersMap = new Map();
	for (const letter of letters) {
		lettersMap.set(letter, lettersMap.get(letter) + 1 || 1);
	}
	for (const char of message) {
		if (lettersMap.has(char)) {
			if (lettersMap.get(char) !== 0) {
				lettersMap.set(char, lettersMap.get(char) - 1);
			} else {
				return false;
			}
		} else {
			return false;
		}
	}
	return true;
}
