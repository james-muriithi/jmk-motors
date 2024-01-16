import { Modal } from "flowbite-react";

export default function Drawer({
  onClose,
  openDrawer,
  className,
  title,
  children,
}: {
  onClose: () => void;
  openDrawer: boolean;
  className?: string;
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <Modal
      show={openDrawer}
      position="top-right"
      size="xl"
      dismissible
      onClose={onClose}
      theme={{
        content: {
          base: "relative h-full w-full p-0 md:h-auto",
          inner:
            "relative rounded-lg bg-variant shadow  flex flex-col max-h-[100vh] h-[100vh] z-50",
        },
        header: {
          base: "flex items-start justify-between rounded-t dark:border-0 border-b pt-3 px-3",
        },
        body: {
          base: "px-4 py-2 flex-1 overflow-auto",
        },
      }}
      className={className}
    >
      <Modal.Header>
        {title}
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
