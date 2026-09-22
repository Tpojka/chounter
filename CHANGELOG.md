# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-09-22

### Changed

- **BREAKING:** Migrate to Manifest V3 (`action` replaces `browser_action`). Chrome no longer
  runs Manifest V2 extensions; Chrome 88 or newer is required.
- Redesign the popup with a cleaner layout, visible focus styles and a "characters" label.
- Replace the red "C" bitmap with a tally-mark icon set in 16, 32, 48 and 128 px.
- Update the count from the `input` event only.

### Added

- App icon in the popup header.
- `scripts/package.sh` to build a Chrome Web Store ready zip.

### Removed

- Content script injected into every website. The extension now requests no permissions and
  no host access.

### Fixed

- Text area overflowing the popup width and causing a horizontal scrollbar.
- Text area not being focused when the popup opens.

## [1.0.0] - 2020-03-14

### Added

- Popup that counts characters typed or pasted into a text area.

[2.0.0]: https://github.com/Tpojka/chounter/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/Tpojka/chounter/releases/tag/v1.0.0
