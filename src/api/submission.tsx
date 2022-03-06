export async function SubmitKitchenForm(data: any) {
  const response = await fetch(
    "https://frosty-wood-6558.getsandbox.com:443/dishes",
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data),
    }
  );
  return await response.json();
}
