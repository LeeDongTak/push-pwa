"use server";

import webpush from "web-push";

webpush.setVapidDetails(
  "<mailto:your-email@example.com>",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

let subscription: PushSubscription | null = null;

export async function subscribeUser(sub: PushSubscription) {
  subscription = sub;
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return { success: true };
}

export async function unsubscribeUser() {
  subscription = null;
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
}

export async function sendNotification(
  subscription: PushSubscription,
  message: string
) {
  try {
    const subscriptionWithKeys = {
      ...subscription,
      keys: {
        p256dh: subscription.getKey("p256dh")
          ? btoa(
              String.fromCharCode.apply(
                null,
                Array.from(new Uint8Array(subscription.getKey("p256dh")!))
              )
            )
          : "",
        auth: subscription.getKey("auth")
          ? btoa(
              String.fromCharCode.apply(
                null,
                Array.from(new Uint8Array(subscription.getKey("auth")!))
              )
            )
          : "",
      },
    };

    await webpush.sendNotification(
      subscriptionWithKeys as webpush.PushSubscription,
      JSON.stringify({
        title: "Test Notification",
        body: message,
      })
    );
  } catch (error) {
    console.error("Error sending notification:", error);
  }
}
