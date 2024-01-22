function copyCode() {
    var codeSnippet = document.getElementById('codeSnippet');
    
    
    var range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    
    document.execCommand('copy');

    
    window.getSelection().removeAllRanges();

    
    alert('Code copied to clipboard!');
}
