import { cleanEnv, port, str } from "envalid";


function envalid() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    FOLDER_LOGS: str(),
  });
}
export default envalid;
