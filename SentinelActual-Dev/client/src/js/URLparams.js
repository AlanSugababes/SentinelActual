  const urlParams = new URLSearchParams(location.search);
        const documentTitle = urlParams.get('name');
        const fileName = urlParams.get('Title');
        const totalWordCount = urlParams.get('count');
        const word = urlParams.getAll('word') // Will store multiple words in an array
        const wordcount = urlParams.getAll('count') // Will store all word counts in an array        
        var wordcountNumbers = wordcount.map(Number); // convert String to Integer
        // Get sum total of words
        var total = 0;
        for (var i in wordcountNumbers) {
            total += wordcountNumbers[i];
        }
        var actualKeywordTotal = (total - totalWordCount);

