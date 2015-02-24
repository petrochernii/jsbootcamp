var text = "A quick black fox jumped over the lazy dog";
var wordsCount = [0,0,0,0,0];
var wordsCountLength = [3,4,5,6,7];
var wordStart = 0;

for (i = 1; i <= text.length; i++) { 
	wordLenght = i - wordStart;
	if (((text.charAt(i) == " ") && (text.charAt(i-1) != " ")) || (i == text.length)) {
		if (wordLenght <= 3) {
			wordsCount[0]++;
			wordStart = i + 1;			
		} 
		if (wordLenght == 4) {
			wordsCount[1]++;
			wordStart = i + 1;			
		}  	
		if (wordLenght == 5) {
			wordsCount[2]++;
			wordStart = i + 1;			
		}  	
		if (wordLenght == 6) {
			wordsCount[3]++;
			wordStart = i + 1;			
		}
		if (wordLenght >= 7) {
			wordsCount[4]++;
			wordStart = i + 1;			
		}
	}
}
	
for (i = 0; i < 5; i++) {
	switch(wordsCountLength[i]) {
		case 3: 
			console.log(wordsCount[i] + " word(s) with 3 or less letters");	
			break;
		case 7: 
			console.log(wordsCount[i] + " word(s) with 7 or more letters");	
			break;
		default: 
        	console.log(wordsCount[i] + " word(s) with " + wordsCountLength[i] + " letters");	
	}

}
