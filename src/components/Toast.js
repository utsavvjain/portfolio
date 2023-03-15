import React from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Toast(props) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);
  if (open == true) {
    let className;
    if (props.severity == "success") {
      className =
        " px-4 py-3 leading-normal text-green-100 bg-green-700  rounded-lg fixed bottom-1 w-full flex";
    } else if (props.severity == "error") {
      className =
        " px-4 py-3 leading-normal text-red-100 bg-red-700 rounded-lg fixed bottom-1";
    }
    setTimeout(() => {
      setOpen(false);
      props.setShowToast(false);
    }, props.duration);
    return (
      <div className=" w-1/2 z-50 shadow-lg shadow-gray-800  ">
        <div className={className} role="alert">
          <strong class="font-bold">{props.boldMessage}</strong>&nbsp;
          <span class="block sm:inline">{props.message}</span>
          <span class="absolute  top-0 bottom-0 right-0 px-4 py-3">
            <svg
              class="fill-current h-6 w-6 text-white"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                onClick={() => {
                  setOpen(false);
                  props.setShowToast(false);
                }}
              />
            </svg>
          </span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
