import { setup, push } from "./action.ts";
import { getInput, saveState, getState } from "./toolkit.ts";

const STATE_IS_POST = "isPost";

const endpoint = getInput("endpoint", { required: true });
const skipPush = getInput("skip-push") === "true";
const signingKey = getInput("signing-key");

const isPost = getState(STATE_IS_POST);
if (isPost) {
  if (skipPush) {
    console.log("Skipping push: skip-push is true");
  } else if (!signingKey) {
    console.warn("Skipping push: signing-key not set");
  } else {
    push(endpoint);
  }
} else {
  saveState(STATE_IS_POST, "true");
  setup(signingKey);
}
