import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let errors = 0;

  // 1. Log Console Errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`[Console Error] ${msg.text()}`);
      errors++;
    }
  });

  page.on('pageerror', error => {
    console.log(`[Page Error] ${error.message}`);
    errors++;
  });

  // 2. Intercept Failed Requests (4xx, 5xx)
  page.on('requestfailed', request => {
    console.log(`[Request Failed] ${request.url()} - ${request.failure()?.errorText}`);
    errors++;
  });

  page.on('response', response => {
    if (response.status() >= 400) {
      console.log(`[HTTP Error] ${response.status()} ${response.statusText()} on ${response.url()}`);
      errors++;
    }
  });

  console.log('Navigating to http://localhost:5174/ ...');
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });

  // 3. Accessibility Checks on Interactive Elements
  console.log('\n--- Accessibility Check ---');
  const interactiveElements = await page.evaluate(() => {
    const issues = [];
    const elements = document.querySelectorAll('button, a, input, select, textarea');
    
    elements.forEach(el => {
      const tag = el.tagName.toLowerCase();
      const hasAriaLabel = el.hasAttribute('aria-label');
      const hasText = el.textContent.trim().length > 0;
      const isHidden = el.getAttribute('aria-hidden') === 'true' || el.style.display === 'none';

      if (isHidden) return;

      // Check Buttons
      if (tag === 'button') {
        if (!hasAriaLabel && !hasText) {
          issues.push(`Button without aria-label or text content: ${el.outerHTML.substring(0, 50)}...`);
        }
      }
      
      // Check Links
      if (tag === 'a') {
        if (!hasAriaLabel && !hasText) {
          issues.push(`Link without text or aria-label: ${el.outerHTML.substring(0, 50)}...`);
        }
        if (!el.getAttribute('href')) {
          issues.push(`Link without href: ${el.outerHTML.substring(0, 50)}...`);
        }
      }
    });
    return issues;
  });

  if (interactiveElements.length > 0) {
    interactiveElements.forEach(issue => console.log(`[A11y Issue] ${issue}`));
    errors += interactiveElements.length;
  } else {
    console.log('[A11y] No basic accessibility issues found in interactive elements.');
  }

  // 4. Final Screenshot
  await page.screenshot({ path: 'analysis_result.png' });
  console.log(`\nScreenshot saved as analysis_result.png`);
  
  console.log(`\nAnalysis finished. Total issues found: ${errors}`);

  await browser.close();
})();
