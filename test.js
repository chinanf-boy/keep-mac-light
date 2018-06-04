import test from 'ava';
import execa from 'execa'

test('cli forEver',async t => {
	const stream = await execa('./cli.js', ['1s']);

	t.is(stream.code,0)
});
