// add whatever parameters you deem necessary
function isSubsequence(phrase, sentence) {
	let idx = 0;
	for (const char of sentence) {
		if (char === phrase[idx]) {
			idx++;
		}
		if (idx >= phrase.length) return true;
	}
	return false;
}
