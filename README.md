<img src="icons/icon-128.png" alt="Chounter icon" width="96" height="96">

## About Chounter

Character counter, extension for Google Chrome and other Chromium engine browsers.

To avoid use of 3rd party websites where you would need to paste private content into their form to count length of text or message,
you can install this blazingly fast extension (blazingly fast because it doesn't use any framework or library)
and count characters in warmth of your Chromium browser.

Chounter is built on Manifest V3 and requests no permissions: it has no access to the pages you visit,
and the text you paste never leaves the popup.

## Simple Usage

1. Download `chounter-<version>.zip` from the latest [release](https://github.com/Tpojka/chounter/releases/latest)
2. Unpack it
3. Open Chrome browser
4. Go to `chrome://extensions`
5. Turn on "Developer mode"
6. Click "Load unpacked"
7. Point to unpacked directory

## Development

Run `./scripts/package.sh` to build `dist/chounter-<version>.zip`, ready for Chrome Web Store upload.

Icon sources are in `icons/`: `icon.svg` for the 128px icon and `icon-small.svg` for 16, 32 and 48px.
PNGs can be regenerated with [rsvg-convert](https://gitlab.gnome.org/GNOME/librsvg):

```sh
for s in 16 32 48; do rsvg-convert -w $s -h $s icons/icon-small.svg -o icons/icon-$s.png; done
rsvg-convert -w 128 -h 128 icons/icon.svg -o icons/icon-128.png
```

## License

Chounter is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT). License file is distributed within this repository.
