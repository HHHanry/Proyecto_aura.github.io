 function toggleAnswer(index) {
            const answer = document.getElementById(`answer-${index}`);
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        }