const substitutionTable = {
  'あ': 'du#', 'い': 'ql2', 'う': 'zx7', 'え': 'gy4', 'お': 'ft8',
  'か': 'bv0', 'き': 'nr6', 'く': 'mj3', 'け': 'hs9', 'こ': 'cp1',
  // 残りの文字の置換表を続けて定義
};

const specialWords = {
  'こんばんは': 'jsjs.8#.#7'
};

function encryptText() {
  const plaintext = document.getElementById("plaintext").value;
  let ciphertext = '';
  for (let i = 0; i < plaintext.length; i++) {
    const char = plaintext[i];
    let word = '';
    for (let j = 0; j < 9 && i + j < plaintext.length; j++) {
      word += plaintext[i + j];
      if (specialWords[word]) {
        ciphertext += specialWords[word];
        i += j;
        break;
      }
    }
    if (!word) {
      ciphertext += substitutionTable[char] || char;
    }
  }
  document.getElementById("ciphertext").value = ciphertext;
}

function decryptText() {
  const ciphertext = document.getElementById("ciphertext").value;
  let plaintext = '';
  for (let i = 0; i < ciphertext.length; i++) {
    const char = ciphertext[i];
    let chunk = '';
    for (let j = 0; j < 9 && i + j < ciphertext.length; j++) {
      chunk += ciphertext[i + j];
      if (specialWords[chunk]) {
        plaintext += specialWords[chunk];
        i += j;
        break;
      }
    }
    if (!chunk) {
      chunk = ciphertext.substr(i, 3);
      plaintext += substitutionTable[chunk] || char;
    }
  }
  document.getElementById("plaintext").value = plaintext;
}

function copyText() {
  const ciphertext = document.getElementById("ciphertext").value;
  navigator.clipboard.writeText(ciphertext);
  alert("暗号文がコピーされました");
}
