import { Dialog, Transition } from "@headlessui/react";
import { useRef } from "react";
import { Fragment, useState } from "react";
import DrinkList from "./DrinkList";

export default function AddDrinkModal({ coaster }) {
  const [query, setQuery] = useState("");
  let [isOpen, setIsOpen] = useState(false);

  const drinkSearchItem = useRef();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="">
      <button
        className="bg-yellow-300 rounded-b-lg absolute bottom-0 w-full h-1/6"
        onClick={openModal}
      >
        Neuer Drink
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-secondary shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white"
                >
                  Drink für {coaster.name}
                </Dialog.Title>
                {/* BODY */}
                <div className="mt-2">
                  <input
                    type="text"
                    ref={drinkSearchItem}
                    placeholder="Drink Suchen oder erstellen"
                    className="text-xl rounded-xl mb-2 pl-2 w-full"
                    onChange={(e) => {
                      setQuery(e.currentTarget.value);
                    }}
                  />
                  <DrinkList
                    searchQuery={query}
                    coaster={coaster}
                    closeModal={closeModal}
                    isOpen={isOpen}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
