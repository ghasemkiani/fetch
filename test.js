import test from "node:test";
import assert from "node:assert";

import {fetch} from "./fetch.js";

test("fetch not failing", async (t) => {
	await assert.doesNotReject(async () => {
		let url = "https://example.com/";
		let rsp = await fetch(url);
		let text = await rsp.text();
		console.log(text);
	});
});
