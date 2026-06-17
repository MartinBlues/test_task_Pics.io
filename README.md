# Pics.io Video Player – Playwright E2E Tests

## Purpose
Automated end-to-end tests for the Video Player feature in Pics.io, focusing on core playback and interaction flows.

## Covered flows
- video initialization and loading state
- playback control (play / pause)
- timeline seeking behavior
- fullscreen mode activation

## Why
These flows are critical (P0) as they directly impact the core user workflow for reviewing and interacting with video assets in a DAM system.

## Assumptions
- User is already authenticated in the Pics.io environment
- Video assets are available in the workspace
- Tests are executed in a stable staging-like environment

## Project structure
- tests/ → Playwright test specs
- playwright.config.ts → test configuration
- tsconfig.json → TypeScript configuration

## Run tests

Install dependencies:
