# keep-mac-light [![Build Status](https://travis-ci.org/chinanf-boy/keep-mac-light.svg?branch=master)](https://travis-ci.org/chinanf-boy/keep-mac-light)

> keep mac no down `standby mode`

## Install

1. Install https://github.com/BlueM/cliclick Before

```
brew install cliclick
```

2. Use keep-mac-light

```
npm i -g keep-mac-light
```

## Use

```
keep-mac-light
```

``` bash
Usage
	$ keep-mac-light [time] [Options]

Examples
	$ keep-mac-light

	set Time to no light, But os setting is First options < oo >

	$ keep-mac-light 1h3m5s

	after 1 hour 3 minutes 5 seconds, quit keep-mac-light

Optioins
	-d  "0.0 ~ 1.0"  {default: 0.1} <dark mode>
```

## dark mode

1. set brightness 0 `-d 0`

> pkg https://github.com/kevva/brightness

2. reset brightness before exit

> pkg https://github.com/sindresorhus/exit-hook

## How it Work ?

every `50s`, use `cliclick` handle the `mouse` will move a lit bit, so Light is Up forEver


## pkg

- https://github.com/BlueM/cliclick `Mac key/mouse event`
- [two-log](https://github.com/chinanf-boy/two-log) I just need two message show
- [what-time](https://github.com/chinanf-boy/what-time) human readable time


## Live

[help me live , live need money 💰](https://github.com/chinanf-boy/live-need-money)


## License

MIT © [chinanf-boy](http://llever.com)
