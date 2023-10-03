async function toFetch(url, options) {
	let urlWorker = process.env.GK_FETCH_WORKER_URL;
	if (!urlWorker) {
		throw new Error(`Env var 'GK_FETCH_WORKER_URL' not set!`);
	}
	let data = JSON.stringify({url, options});
	let searchParams = new URLSearchParams({data});
	let uRL = new URL(urlWorker);
	uRL.search = searchParams.toString();
	// console.log(uRL);
	return await fetch(uRL);
}

export {toFetch as fetch};
