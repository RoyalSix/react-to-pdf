import puppeteer from "puppeteer";
import delay from 'buffer';

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  const { url } = body;
  if (!url) {
    return {
      statusCode: 500,
      body: 'No URL specified'
    }
  }
  const pageUrl = encodeURI(url);
  console.log("Got page url as", pageUrl);
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(pageUrl, { printBackground: true });
  console.log("Navigated to page");
  await page.goto(pageUrl, {
    timeout: 20000,
    waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
  })
  await delay(1000);
  const pdf = await page.pdf({ format: "A4" });
  console.log("Generated pdf", pdf.length);
  await browser.close();
  return {
    statusCode: 200,
    headers: { 'Content-type': 'application/pdf' },
    body: pdf.toString('base64'),
    isBase64Encoded: true,
  };
}