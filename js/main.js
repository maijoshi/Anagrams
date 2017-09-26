$('#run-check')
  .on('click', function() {
    var word1 = $('#word-entry-1')
      .val();
    var word2 = $('#word-entry-2')
      .val();

    var isAnagram = check_anagram(word1, word2);

    if (isAnagram) {
      $('#result-success')
        .removeClass('hidden');
      $('#result-failure')
        .addClass('hidden');
    } else {
      $('#result-failure')
        .removeClass('hidden');
      $('#result-success')
        .addClass('hidden');
    }

    return false;
  })

function check_anagram(word1, word2) {
  if (word1 === null  && word2 === null ) {
    return true;
  }

  if (word1 === null || word2 === null || word1 === undefined || word2 === undefined) {
    return false;
  }

  word1 = word1.trim().toLowerCase();
  word2 = word2.trim().toLowerCase()

  return word1.split('').sort().join('') === word2.split('').sort().join('')

  var frequency_count = {};

  for (var i = 0; i < word1.length; i++){
    if (frequency_count[word1[i]] == undefined) {
      frequency_count[word1[i]] = 1;
    }
    else {
      frequency_count[word1[i]] += 1;
    }
  }

  for (var i = 0; i < word2.length; i++) {
    if (frequency_count[word2[i]] == undefined || frequency_count[word2[i]] == 0) {
      return false;
    }
    else {
      frequency_count[word2[i]] -= 1;
    }
  }

  return true;
}
