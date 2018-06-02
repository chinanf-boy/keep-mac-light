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
	log.start("runing keep mac light")
	let t = cli.input[0]
	// if t == false , forever
	let forEver = !!t
	let setTime = 'o_o forever 😁 '
	if(t){ // set time
		function getNum(str){
			let i = t.indexOf('h')
			if(i > -1){
				let n = t.substring(0, i)
				t = t.slice(i+1)
				return n
			}
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

	KeepRun()

	function KeepRun(){

		if( forEver && T > setTime){
			// forever == false, never Quit node
			log.stop()
			process.exit(0)
		}

		exec('cliclick m:+1,+0')
		exec('cliclick m:-1,+0')
		setTimeout(() => {
			T += 59
			log.text(`... ${T}/${setTime}`)
			KeepRun()
		}, 59*1000);

	}


})()
