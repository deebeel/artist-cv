import FocusLock from 'react-focus-lock';

export function Modal({children, onClose}: GenericProps<{ onClose: () => void }>) {
    return <FocusLock
        className="overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 w-full h-full md:inset-0 h-modal justify-center items-center">
        <div className="absolute bg-white top-0 left-0 h-full w-full opacity-90" onClick={onClose}/>
        <div className="relative p-4 w-full max-w-5xl h-full">
            {children}
        </div>
    </FocusLock>;

}