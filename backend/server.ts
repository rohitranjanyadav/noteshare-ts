import app from "../backend/src/app.ts";
import envConfig from "./src/config/config.ts";
import connectToDatabase from "./src/config/db.ts";

const startServer = async () => {
  await connectToDatabase();

  const port = envConfig.port || 3000;

  app.listen(port, () => {
    console.log(`Server started at PORT ${port}`);
  });
};

startServer();
