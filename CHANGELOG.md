# Ventana Changelog

### 0.4.0 (TBD, 2016)

  - `.queue()` now includes an object param containing `timestamp`, `scrollTop`, `scrollLeft`, `width`, `height`. For performance reasons, do not do any DOM inspection or measuring in any callbacks passed to `.queue()`.
  - New method `.measure()` is for doing any any DOM inspection or measuring. Do not actually manipulate the DOM in callbacks passed to `.measure()`.
  - New headless testing setup using [Nightmare.js](http://www.nightmarejs.org/)
  - New API for harnessing ventana's internals
