#!/usr/bin/env node
'use strict';
const meow = require('meow');

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

	let log = twoLog(cli.flags['D'])
	let t = cli.input[0]
	// if t == false , forever
	let forEver = !!t
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

	let T = 0

	const { exec } = require('child_process')

	if(setTime && setTime > 0){
		timeShow()
	}else{
		setTime = '0-^ ForEver'
	}

	log.start("runing keep mac light >> ⏰ << " + setTime)

	KeepRun()

	function KeepRun(){

		if( forEver && setTime <= 0){
			// forever == false, never Quit node
			log.stop(`Time, KeepRun end ${new Date().toLocaleString()}`,{ora:"succeed"})
			process.exit(0)
		}

		exec('cliclick m:+1,+0')
		exec('cliclick m:-1,+0')
		setTimeout(() => {
			T += 50
			KeepRun()
		}, 50*1000);

	}

	function timeShow(){
		if(setTime <= 0){
			log.stop(`Time end ${new Date().toLocaleString()}`,{ora:"succeed"})
			process.exit(0)
		}
		log.text(`..(o^^o).. ⏰ ${setTime}s`)
		setTimeout(() => {
			setTime --
			timeShow()
		}, 1000);

	}


})()
