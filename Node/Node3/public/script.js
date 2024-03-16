async function generateLorem() {
    const count = document.getElementById('paragraphCount').value;
    const response = await fetch(`/generate?count=${count}`);
    const data = await response.json();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    data.paragraphs.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      resultDiv.appendChild(p);
    });
  }
  