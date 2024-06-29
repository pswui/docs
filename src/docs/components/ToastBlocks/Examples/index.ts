import { _Error } from "./Error";
import { Normal } from "./Normal";
import { PendingFail } from "./PendingFail";
import { PendingSuccess } from "./PendingSuccess";
import { Success } from "./Success";
import { Warning } from "./Warning";

export default {
  Error: _Error /* not shadowing global Error (lol) */,
  Normal,
  PendingFail,
  PendingSuccess,
  Success,
  Warning,
};
