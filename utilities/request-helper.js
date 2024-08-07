export default async function RequestHelper({ HEAD, URL, METHOD, DATA }) {
  try {
    const HEADERS = {
      ...HEAD,
      "Access-Control-Allow-Origin": "*",
    };

    const res = await fetch(URL, {
      method: METHOD,
      headers: HEADERS,
      body: JSON.stringify(DATA),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
}
