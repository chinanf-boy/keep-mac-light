#!/usr/bin/env node
'use strict';
const meow = require('meow');
const whatTime = require('what-time');
const reverseWhatTime = require('reverse-what-time');
const brightness = require('brightness');

const cli = meow(`
  Usage
    $ keep-mac-light [time] [Options]

  Examples
    $ keep-mac-light

    set Time to no light, But os setting is First options < oo >

    $ keep-mac-light 1h3m5s

    after 1 hour 3 minutes 5 seconds, quit keep-mac-light

  Optioins
    -d  "0.0 ~ 1.0"  {default: 0.1} <dark mode>
`);


(async function(){
  const {twoLog} = require('two-log')
  const { exec } = require('child_process')

  const StartTime = new Date().toLocaleString()

  let log = twoLog(cli.flags['D'])
  let t = cli.input[0]

  // dark mode
	let dark = cli.flags['d']
	let lightLevel;
  if(dark || dark === 0){
    dark = dark !== true ? dark : 0.1
    const exitHook = require('exit-hook');

    lightLevel = await brightness.get().then(r => r)
    // Seem like some time , brightness will relight : BUG
    await brightness.set(dark)

    exitHook(() => {

      brightness.set(lightLevel)
    });
  }




  // if t == false , forever
  let setTime = ''
  if(t){ // set time
    setTime = reverseWhatTime(t)
  }
  if(setTime && setTime > 0){
    timeShow()
  }else{
    setTime = '0-^ ForEver'
  }

  log.start("runing keep mac light >> ⏰ << " + setTime)

  const moveMouseTime = 50000
  let KeepTime;

  KeepRun()
  function KeepRun(){
    exec('cliclick m:+1,+0')
    exec('cliclick m:-1,+0')
    KeepTime = setTimeout(() => {
      KeepRun()
    }, moveMouseTime);
  }

 // If have time set, Run time show every seconds
  async function timeShow(){
		dark && await brightness.set(dark);
    if(setTime <= 0){
      log.stop(`${StartTime} ~~ ${new Date().toLocaleString()}`,{ora:"succeed"})
      clearTimeout(KeepTime)
      process.exitCode = 0;
    }else{
      log.text(`..(o^^o).. ⏰ ${whatTime(setTime)}`)
      setTimeout(() => {
        setTime --
        timeShow()
      }, 1000);
    }
  }


})()
