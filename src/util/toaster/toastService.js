import { toast } from "react-toastify";
const toast_options = {
  autoClose: 5000,
};
class toastService {
  notifyError = (msg) => {
    toast.error(msg, toast_options);
  };
  notifySuccess = (msg) => {
    toast.success(msg, toast_options);
  };
  notifyWarn = (msg) => {
    toast.warn(msg, toast_options);
  };
}

export default new toastService();
