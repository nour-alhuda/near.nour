//@nearfile
import { storage, logging } from "near-runtime-ts";

// --- contract code goes below
export function setResponse(apiResponse: string): void {
  storage.setString("response", apiResponse);
  logging.log("Response is now: " + apiResponse);
}

export function getResponse(): string {
  return storage.getString("response");
} //added by nour but couldn't test the code because of this error
// ERROR TS2531: Object is possibly 'null'.

//    return storage.getString("response");
//           ~~~~~~~~~
//  in assembly/main.ts(80,9)
// assembly/main.ts
export function setResponseByKey(key: string, newResponse: string): void {
  storage.setString(key, newResponse);
}

export function getResponseByKey(key: string): string {
  return storage.getString(key);
}
