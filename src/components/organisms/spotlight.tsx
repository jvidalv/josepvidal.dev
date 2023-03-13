import { useState, Fragment, useRef, MouseEventHandler } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useHotkeys } from "react-hotkeys-hook";
import { useTheme } from "next-themes";

export const Spotlight = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  const toggleModal = () => setIsOpen((v) => !v);

  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useHotkeys("metaKey+k", toggleModal, { enableOnFormTags: ["INPUT"] }, [
    toggleModal,
  ]);

  const onClickPanel: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!ref.current) {
      return;
    }

    if (
      (event.target as unknown as { localName: string }).localName === "input"
    ) {
      return;
    }

    const panel = ref.current;
    panel.style.transform = "scale(.99)";
    setTimeout(() => {
      panel.style.transform = "";
    }, 100);
  };

  return (
    <>
      <div>
        <button
          onClick={openModal}
          title="cmd + k"
          className="hover:bg-neutral-200 dark:hover:bg-neutral-700 p-2 rounded-md transition"
        >
          <svg height="25" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.023 7.296v5.419H3.648C1.644 12.715 0 14.316 0 16.342 0 18.355 1.644 20 3.648 20a3.657 3.657 0 003.648-3.659v-2.375h5.397v2.376A3.657 3.657 0 0016.343 20c2.004 0 3.647-1.644 3.647-3.659 0-2.025-1.643-3.626-3.648-3.626h-2.375v-5.42h2.376c2.004 0 3.647-1.611 3.647-3.626C19.99 1.644 18.346 0 16.341 0c-2.014 0-3.648 1.644-3.648 3.67v2.364H7.296V3.669C7.296 1.644 5.663 0 3.648 0 1.644 0 0 1.644 0 3.67c0 2.014 1.644 3.626 3.648 3.626h2.375zm-2.375-1.24c-1.294 0-2.375-1.083-2.375-2.387 0-1.315 1.081-2.396 2.375-2.396 1.304 0 2.375 1.081 2.375 2.396v2.386H3.648zm12.694 0h-2.376V3.668c0-1.315 1.071-2.396 2.376-2.396 1.293 0 2.375 1.081 2.375 2.396 0 1.304-1.082 2.386-2.375 2.386zm-9.046 6.67V7.274h5.397v5.45H7.296zm-3.648 1.219h2.375v2.386a2.387 2.387 0 01-2.375 2.386 2.394 2.394 0 01-2.375-2.386 2.394 2.394 0 012.375-2.386zm12.694 0a2.394 2.394 0 012.375 2.386 2.394 2.394 0 01-2.375 2.386 2.387 2.387 0 01-2.376-2.386v-2.386h2.376z" />
          </svg>
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          open={isOpen}
          initialFocus={inputRef}
          className="relative z-10"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  onClick={onClickPanel}
                  ref={ref}
                  className="w-full sm:min-w-[600px] will-change-transform transition-all duration-100 px-4 max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 text-left align-middle shadow-xl"
                >
                  <Dialog.Title
                    as="button"
                    className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:hover:text-white transition hover:text-black rounded px-1.5 py-1 mt-4"
                  >
                    Home
                  </Dialog.Title>
                  <input
                    ref={inputRef}
                    type="text"
                    className="h-16 bg-transparent w-full focus:outline-none text-xl dark:placeholder:text-neutral-600"
                    placeholder="Search"
                  />
                  <div className="h-[2px] bg-gradient-to-r from-accent to-accent2 -mx-4 opacity-50" />
                  <ul role="listbox" className="flex flex-col gap-1 my-4">
                    <span className="block text-xs text-gray-500 mb-1 ">
                      Theme
                    </span>
                    {isDark ? (
                      <li
                        onClick={() => {
                          setTheme("light");
                          closeModal();
                        }}
                        className="cursor-pointer transition hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md -mx-2 px-2 py-2 text-gray-400"
                      >
                        Set theme to light
                      </li>
                    ) : (
                      <li
                        onClick={() => {
                          setTheme("dark");
                          closeModal();
                        }}
                        className="cursor-pointer transition hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md -mx-2 px-2 py-2 text-gray-400"
                      >
                        Set theme to light
                      </li>
                    )}
                    <li
                      onClick={() => {
                        setTheme("system");
                        closeModal();
                      }}
                      className="cursor-pointer transition hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md -mx-2 px-2 py-2 text-gray-400"
                    >
                      Set theme to system
                    </li>
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Spotlight;
