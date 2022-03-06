export async function SubmitKitchenForm(data: any) {
  const response = await fetch(
    "https://frosty-wood-6558.getsandbox.com:443/dishes",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    }
  );
  return await response.json();
}
