import type { Plugin } from "vue";
import Notification from "./Notification.vue";
import NotificationProgrammatic from "./NotificationProgrammatic";
/** export notification specific types */
export type { NotifcationNoticeProps, NotifcationProps } from "./types";
/** export notification plugin */
declare const _default: Plugin;
export default _default;
/** export notification components */
export { Notification as ONotification, NotificationProgrammatic };
