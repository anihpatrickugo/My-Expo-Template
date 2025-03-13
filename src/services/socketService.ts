// import { ManagerOptions, Socket, SocketOptions, io } from "socket.io-client";
// import { BASE_URL } from "@/constants";
// import { store } from "@/store";
// import { OrdersSocketEmitEvents, OrdersSocketListenEvents } from "@/types";

// const sharedOption: Partial<ManagerOptions & SocketOptions> = {
//   auth(cb) {
//     const auth = store.getState().auth;
//     cb({ token: auth.access_token });
//   },
//   autoConnect: false,
//   reconnection: true,
//   reconnectionDelay: 1000,
//   retries: 10,
//   reconnectionAttempts: Infinity,
// };

// export const socketService = {
//   main: io(BASE_URL, {
//     // autoConnect: false,
//     ...sharedOption,
//   }),
//   orders: io(`${BASE_URL}/orders`, {
//     rejectUnauthorized: true,
//     ...sharedOption,
//   }) as Socket<OrdersSocketListenEvents, OrdersSocketEmitEvents>,
// };
