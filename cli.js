#!/usr/bin/env node
'use strict';
const meow = require('meow');
const keepMacLight = require('.');

const cli = meow(`
	Usage
	  $ keep-mac-light [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ keep-mac-light
	  unicorns & rainbows
	  $ keep-mac-light ponies
	  ponies & rainbows
`);

// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

for (var x = 0; x < width; x++)
{
	y = height * Math.sin((twoPI * x) / width) + height;
	robot.moveMouse(x, y);
}
