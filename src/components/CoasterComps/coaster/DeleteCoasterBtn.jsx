import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useRouter } from "next/router";
import { useCoaster } from "../../../contexts/coasterContext";
import Loading from "../../Loading";

export default function DeleteCoasterBtn({ coaster }) {
  const { setIsLoading, isLoading } = useCoaster();
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDeleteCoaster = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/Coaster/${coaster.id}`);
      closeModal();
      router.reload();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="absolute right-2 top-1 text-red-600  cursor-pointer">
        <XIcon width={30} onClick={openModal} />
      </div>

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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Bierdeckel wirklich löschen?
                </Dialog.Title>

                {isLoading ? (
                  <Loading />
                ) : (
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={handleDeleteCoaster}
                    >
                      Löschen
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center ml-4 px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Abbrechen
                    </button>
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
