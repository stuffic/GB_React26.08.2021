import { REQUEST_STATUS } from "../../utils/constants";

export const selectPicsPending = (state) => state.pics.request.status === REQUEST_STATUS.PENDING;
export const selectPics = (state) => state.pics.list;
export const selectPicsError = (state) => state.pics.request.error;