import delay from 'delay';
const chromium = require('chrome-aws-lambda');

exports.handler = async function (event, context) {
  console.info("EVENT\n" + JSON.stringify(event, null, 2))
  console.info("CONTEXT\n" + JSON.stringify(context, null, 2))
  const body = JSON.parse(event.body);
  const {
    url
  } = body;

  if (!url) {
    return {
      statusCode: 500,
      body: 'No URL specified'
    };
  }

  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  });
  const pageUrl = encodeURI(url);
  console.log("Got page url as", pageUrl);
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(pageUrl, {
    printBackground: true
  });
  console.log("Navigated to page");
  await page.goto(pageUrl, {
    timeout: 20000,
    waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
  });
  await delay(1000);
  const pdf = await page.pdf({
    format: "A4"
  });
  console.log("Generated pdf", pdf.length);
  await browser.close();
  return {
    statusCode: 200,
    headers: {
      'Content-type': 'application/pdf'
    },
    body: pdf.toString('base64'),
    isBase64Encoded: true
  };
};