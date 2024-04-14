import type { Plugin } from "vue";
import Modal from "./Modal.vue";
import ModalProgrammatic from "./ModalProgrammatic";
/** export modal specific types */
export type { ModalProps } from "./types";
/** export modal plugin */
declare const _default: Plugin;
export default _default;
/** export modal components */
export { ModalProgrammatic, Modal as OModal };
