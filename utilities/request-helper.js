export default async function requestHelper({ HEAD, URL, METHOD, DATA }) {
  try {
    const HEADERS = {
      ...HEAD,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const options = {
      method: METHOD,
      headers: HEADERS,
      body: METHOD !== "GET" ? JSON.stringify(DATA) : undefined,
    };

    const res = await fetch(URL, options);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Request failed:", err);
    throw err;
  }
}
