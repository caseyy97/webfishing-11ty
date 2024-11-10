import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
	let url = "https://webfishing.kukinuki.dev/data.json";

	/* This returns a promise */
	return EleventyFetch(url, {
		duration: "2m", // fetch new data every 2 minutes
		type: "json", // we’ll parse JSON for you
	});
};