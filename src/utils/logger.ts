import * as device from "expo-device";
import { APP_VARIANT } from "~/constants";

type ENV = "development" | "production" | "staging";

class Logger {
  private env: ENV = APP_VARIANT as ENV;
s
  log(message?: any, ...data: any[]) {
    switch (this.env) {
      case "development":
        console.log(message, ...data);
        break;
      case "staging":
        // console.log(data, { device });
        // Send report to staging logger
        break;
      case "production":
        // console.log(message, ...data, { device });
        // Send report to production logger
        break;
      default:
        console.log(message, ...data, { device });
        break;
    }
  }
  error(message?: any, ...data: any[]) {
    switch (this.env) {
      case "development":
        console.error(message, ...data);
        break;
      case "staging":
        // console.error(message, ...data, { device });
        // Send report to staging logger
        break;
      case "production":
        // console.error(message, ...data, { device });
        // Send report to production logger
        break;
      default:
        console.error(message, ...data, { device });
        break;
    }
  }
  info(message?: any, ...data: any[]) {
    switch (this.env) {
      case "development":
        console.info(message, ...data);
        break;
      case "staging":
        // console.info(message, ...data, { device });
        // Send report to staging logger
        break;
      case "production":
        // console.info(message, ...data, { device });
        // Send report to production logger
        break;
      default:
        console.info(message, ...data, { device });
        break;
    }
  }
  warn(message?: any, ...data: any[]) {
    switch (this.env) {
      case "development":
        console.warn(message, data);
        break;
      case "staging":
        // console.warn(message, ...data, { device });
        // Send report to staging logger
        break;
      case "production":
        // console.warn(message, ...data, { device });
        // Send report to production logger
        break;
      default:
        console.warn(message, ...data, { device });
        break;
    }
  }
}

export const logger = new Logger();