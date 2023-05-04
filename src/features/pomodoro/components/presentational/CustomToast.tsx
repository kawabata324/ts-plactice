import { Toast } from "react-hot-toast";
import { IconBellRingingFilled } from "@tabler/icons-react";

export const CustomToast = (t: Toast, onClickAction: (t: Toast) => void) => {
  t.duration = Infinity;

  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      onClick={() => onClickAction(t)}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <IconBellRingingFilled />
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">Finished Pomodoro</p>
            <p className="mt-1 text-sm text-gray-500">Stop Sounds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
