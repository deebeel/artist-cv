import FocusLock from 'react-focus-lock';

export function Modal({onClose, content, background}: {
    onClose: () => Promise<void>,
    content: React.ReactNode
    background: React.ReactNode
}) {
    return <div className="relative">
        {background}
        <FocusLock
            className="overflow-hidden fixed flex top-0 right-0 left-0 z-50 w-screen h-screen md:inset-0 h-modal justify-center items-center">
            <div className="absolute bg-white top-0 left-0 h-full w-full opacity-90"
                 onClick={onClose}/>
            <div className="relative p-4 h-full w-full max-w-5xl ">
                {content}
            </div>
        </FocusLock>
    </div>;
}