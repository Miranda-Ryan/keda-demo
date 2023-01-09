import { AzureFunction, Context } from "@azure/functions";

const queueTrigger: AzureFunction = async function (
  context: Context,
  myQueueItem: string
): Promise<void> {
  setTimeout(() => {
    context.log("Queue trigger function processed work item", myQueueItem);
  }, 120000);
};

export default queueTrigger;
