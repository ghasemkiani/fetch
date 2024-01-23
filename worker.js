export default {
  async fetch(request, env, ctx) {
    const { url, options } = JSON.parse(new URL(request.url).searchParams.get("data"));
    const response = await fetch(url, options);
    const { readable, writable } = new TransformStream();
    response.body.pipeTo(writable);
    return new Response(readable, response);
  },
};
