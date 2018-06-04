#!/usr/bin/env node
'use strict';
const meow = require('meow');
var whatTime = require('what-time');

const cli = meow(`
	Usage
	  $ keep-mac-light [time]

	Examples
	  $ keep-mac-light

		set Time to no light, But os setting is First options < oo >

		"1h3m5s"
		1 hour 3 minutes 5 seconds
`);

(async function(){
	const {twoLog} = require('two-log')

	const StartTime = new Date().toLocaleString()

	let log = twoLog(cli.flags['D'])
	let t = cli.input[0]
	// if t == false , forever
	let setTime = ''

	if(t){ // set time
		function getNum(str){
			let i = t.indexOf(str)
			if(i > -1){
				let n = t.substring(0, i)
				t = t.slice(i+1)
				return n
			}
			return 0
		}

		let h = getNum('h')
		let m = getNum('m')
		let s = getNum('s')

		h = +h * 3600
		m = +m * 60
		s = +s

		setTime = h + m + s
	}

	if(setTime && setTime > 0){
		timeShow()
	}else{
		setTime = '0-^ ForEver'
	}

	log.start("runing keep mac light >> ⏰ << " + setTime)


	const { exec } = require('child_process')
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
	function timeShow(){
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
