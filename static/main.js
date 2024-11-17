document.addEventListener('DOMContentLoaded', async () => {
  const content = document.getElementById('content');
  
  try {
    const response = await fetch('/README.md');
    const text = await response.text();
    
    // Remove the SVG image from markdown content since we're showing it separately
    const contentWithoutHeader = text.replace(/<img[^>]*>/, '');
    
    // Initialize markdown-it with mermaid support
    const md = window.markdownit({
      html: true,
      linkify: true,
      typographer: true
    });
    
    content.innerHTML = md.render(contentWithoutHeader);
    
    // Initialize mermaid
    if (window.mermaid) {
      window.mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    }
  } catch (error) {
    console.error('Error loading content:', error);
    content.innerHTML = '<p>エラー: コンテンツを読み込めませんでした。</p>';
  }
});
