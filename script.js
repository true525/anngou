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
    const word = plaintext.substr(i, 3); // 3文字ずつチェック
    if (specialWords[word]) {
      ciphertext += specialWords[word];
      i += 2; // 次の3文字に進む
    } else {
      ciphertext += substitutionTable[char] || char;
    }
  }
  document.getElementById("ciphertext").value = ciphertext;
}

function decryptText() {
  const ciphertext = document.getElementById("ciphertext").value;
  let plaintext = '';
  for (let i = 0; i < ciphertext.length; i += 3) {
    const chunk = ciphertext.substr(i, 3);
    const word = ciphertext.substr(i, 9); // 9文字ずつチェック
    if (specialWords[word]) {
      plaintext += specialWords[word];
      i += 8; // 次の3文字に進む
    } else {
      plaintext += substitutionTable[chunk] || chunk;
    }
  }
  document.getElementById("plaintext").value = plaintext;
}
