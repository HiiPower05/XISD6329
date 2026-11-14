
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;

async function test(name, fn) {
  try {
    await fn();
    console.log(`PASS: ${name}`);
  } catch (error) {
    console.log(`FAIL: ${name} - ${error.message}`);
  }
}

if (!url || !key) {
  console.log("Set SUPABASE_URL and SUPABASE_KEY first.");
  process.exit(1);
}

const response = await fetch(
  `${url}/rest/v1/orders?select=*&limit=1`,
  {
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`
    }
  }
);

await test("Orders API returns HTTP 200", async () => {
  if (response.status !== 200) {
    throw new Error(`Received HTTP ${response.status}`);
  }
});

let data;
try {
  data = await response.json();
} catch {
  data = null;
}

await test("Orders API returns an array", async () => {
  if (!Array.isArray(data)) {
    throw new Error("Response is not an array");
  }
});

console.log("API test run complete.");
