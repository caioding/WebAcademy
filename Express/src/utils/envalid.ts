import { cleanEnv, port, str } from "envalid";


function envalid() {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
  });
};
export default envalid;
