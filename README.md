# TI81Sim
A simulation of the TI81's screen complete with a few pixel manipulation commands

To add this program to your project do the following:
  Download ti81sim.js and include it in your projects HTML file
  Add id="ti81" to the canvas you would like to use for the ti81 simulation
  
Below is a complete list of commands for the simulation:
  ti81.clearSreen() - sets all pixels to 0
  ti81.pxTest(x,y) - returns the state of a pixel, 1 - on, 0 - off
  ti81.pxOn(x,y) -  turns a pixel on
  ti81.pxOff(x,y) - turns a pixel off
  ti81.pxChange(x,y) - toggles a pixel
  ti81.render() - updates the screen in the browser, no changes are visible until this is called
