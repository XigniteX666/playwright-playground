const { webkit, devices } = require('playwright');
const iPhone = devices['iPhone 11 Pro'];

(async () => {
  const browser = await webkit.launch({ headless: false, slowMo: 50 });

  const context = await browser.newContext({
    ...iPhone,
    permissions: ['geolocation'],
    geolocation: { latitude: 52.52, longitude: 13.39 },
    colorScheme: 'dark',
    locale: 'de-DE'
  })

  const page = await context.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();