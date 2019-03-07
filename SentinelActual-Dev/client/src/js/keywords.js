let totalKeywords = word.length;
                    let threatPercentage = (100 / totalWordCount) * actualKeywordTotal;
                    let percentage = Math.round(threatPercentage);
                    let minusPercentage = 100 - percentage;
                    document.write('<h2>' + totalWordCount + ' words in document &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' + actualKeywordTotal + ' keywords flagged</h2>');