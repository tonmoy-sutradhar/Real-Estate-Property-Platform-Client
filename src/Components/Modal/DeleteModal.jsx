// import {
//   Dialog,
//   Transition,
//   TransitionChild,
//   DialogPanel,
//   DialogTitle,
// } from '@headlessui/react'
// import { Fragment } from 'react'
// import PropTypes from 'prop-types'
// const DeleteModal = ({ closeModal, isOpen, handleDelete }) => {
//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as='div' className='relative z-10' onClose={closeModal}>
//         <TransitionChild
//           as={Fragment}
//           enter='ease-out duration-300'
//           enterFrom='opacity-0'
//           enterTo='opacity-100'
//           leave='ease-in duration-200'
//           leaveFrom='opacity-100'
//           leaveTo='opacity-0'
//         >
//           <div className='fixed inset-0 bg-black bg-opacity-25' />
//         </TransitionChild>

//         <div className='fixed inset-0 overflow-y-auto'>
//           <div className='flex min-h-full items-center justify-center p-4 text-center'>
//             <TransitionChild
//               as={Fragment}
//               enter='ease-out duration-300'
//               enterFrom='opacity-0 scale-95'
//               enterTo='opacity-100 scale-100'
//               leave='ease-in duration-200'
//               leaveFrom='opacity-100 scale-100'
//               leaveTo='opacity-0 scale-95'
//             >
//               <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
//                 <DialogTitle
//                   as='h3'
//                   className='text-lg font-medium leading-6 text-gray-900'
//                 >
//                   Are you sure?
//                 </DialogTitle>
//                 <div className='mt-2'>
//                   <p className='text-sm text-gray-500'>
//                     You cannot undo once it&apos;s done!
//                   </p>
//                 </div>
//                 <hr className='mt-8 ' />
//                 <div className='flex mt-2 justify-around'>
//                   <button
//                     onClick={handleDelete}
//                     type='button'
//                     className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
//                   >
//                     Yes
//                   </button>
//                   <button
//                     type='button'
//                     className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
//                     onClick={closeModal}
//                   >
//                     No
//                   </button>
//                 </div>
//               </DialogPanel>
//             </TransitionChild>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   )
// }

// DeleteModal.propTypes = {
//   id: PropTypes.string,
//   modalHandler: PropTypes.func,
//   closeModal: PropTypes.func,
//   handleDelete: PropTypes.func,
//   isOpen: PropTypes.bool,
// }

// export default DeleteModal
//

// new-------------------------------
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import PropTypes from "prop-types";

const DeleteModal = ({ closeModal, isOpen, handleDelete }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-6 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-8 text-left align-middle shadow-2xl transition-all">
                <DialogTitle
                  as="h2"
                  className="text-xl font-bold text-center leading-6 text-gray-900"
                >
                  Confirm Deletion
                </DialogTitle>
                <div className="mt-4">
                  <p className="text-base text-gray-600 text-center">
                    This action is irreversible. Are you sure you want to
                    proceed?
                  </p>
                </div>
                <div className="mt-6 border-t border-gray-300"></div>
                <div className="flex mt-6 justify-center gap-4">
                  <button
                    onClick={handleDelete}
                    type="button"
                    className="px-6 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Yes, Delete
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

DeleteModal.propTypes = {
  id: PropTypes.string,
  modalHandler: PropTypes.func,
  closeModal: PropTypes.func,
  handleDelete: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default DeleteModal;
