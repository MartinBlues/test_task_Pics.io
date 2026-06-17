import { test, expect } from '@playwright/test';

const URL = 'https://app.pics.io';

test('video should load', async ({ page }) => {
  await page.goto(URL);

  const video = page.locator('video');
  await expect(video).toBeVisible();
});

test('video should play', async ({ page }) => {
  await page.goto(URL);

  const video = page.locator('video');

  await page.locator('button[aria-label="Play"]').click();

  await expect(video).toHaveJSProperty('paused', false);
});

test('video should pause', async ({ page }) => {
  await page.goto(URL);

  const video = page.locator('video');

  await page.locator('button[aria-label="Play"]').click();
  await page.locator('button[aria-label="Pause"]').click();

  await expect(video).toHaveJSProperty('paused', true);
});

test('video should seek', async ({ page }) => {
  await page.goto(URL);

  const video = page.locator('video');

  await video.evaluate(v => {
    (v as HTMLVideoElement).currentTime = 10;
  });

  const time = await video.evaluate(v => {
    return (v as HTMLVideoElement).currentTime;
  });

  expect(time).toBeGreaterThanOrEqual(10);
});

test('fullscreen should work', async ({ page }) => {
  await page.goto(URL);

  await page.locator('button[aria-label="Fullscreen"]').click();

  const isFullscreen = await page.evaluate(() => {
    return !!document.fullscreenElement;
  });

  expect(isFullscreen).toBeTruthy();
});