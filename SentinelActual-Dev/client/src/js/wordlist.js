 ul = document.getElementById("ul-test");
 for (var i = 0, len = word.length; i < len; i++) {
     var li = document.createElement("li");
     var text = document.createTextNode(word[i]);
     var textPart2 = document.createTextNode(wordcountNumbers[i + 1]);
     var openBracket = document.createTextNode(" (");
     var closeBracket = document.createTextNode(")");
     li.appendChild(text);
     li.appendChild(openBracket);
     li.appendChild(textPart2);
     li.appendChild(closeBracket);
     ul.appendChild(li);
 }
