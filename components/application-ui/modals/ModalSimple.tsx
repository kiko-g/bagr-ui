import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon, KeyIcon } from "@heroicons/react/24/outline"

type Props = {
  startOpen?: boolean
}

export function ModalSimple({ startOpen }: Props) {
  const [isOpen, setIsOpen] = useState(startOpen !== undefined ? startOpen : false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={openModal}
        title="Open modal"
        className="inline-flex items-center justify-center gap-x-2 self-stretch rounded border border-rose-500 bg-rose-600/70 px-3 py-2 text-center text-sm text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 dark:border-blue-500 dark:bg-blue-500/50"
      >
        <span>Show</span>
        <KeyIcon className="h-4 w-4 lg:h-5 lg:w-5" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm dark:bg-white/5" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle text-gray-600 shadow-xl transition-all dark:bg-gray-800 dark:text-white">
                  <div className="flex items-center justify-between">
                    <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-primary dark:text-white">
                      Modal Title
                    </Dialog.Title>
                    <button
                      onClick={closeModal}
                      className="flex items-center gap-x-1 rounded border border-rose-600/30 bg-rose-600/10 px-1 py-1 text-sm text-rose-800 transition hover:bg-rose-600 hover:text-white dark:bg-rose-600/20 dark:text-white dark:hover:bg-rose-600"
                    >
                      <XMarkIcon className="h-4 w-4" />{" "}
                    </button>
                  </div>

                  <div className="mt-3">
                    <div className="text-sm font-normal lg:text-base">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      <ul className="ml-3 mt-2 flex list-disc flex-col gap-y-0.5 lg:ml-4 lg:mt-1">
                        <li>Apples and oranges.</li>
                        <li>Bananas and mangos.</li>
                        <li>Strawberries and blueberries.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-full rounded bg-teal-600 p-2 text-sm text-white transition hover:opacity-80 dark:bg-teal-600"
                    >
                      Cool, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
