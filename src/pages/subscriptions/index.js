import * as Component from "../../components";
import subscriptions from "./subscriptions.js";
import descriptions from "./descriptions.js";

const Subscription = () => {
  return (
    <Component.SubscriptionBoxContainer
      subscriptions={subscriptions}
      description={descriptions}
    />
  );
};

export default Subscription;
