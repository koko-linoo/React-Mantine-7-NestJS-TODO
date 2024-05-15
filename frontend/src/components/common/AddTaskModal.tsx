import { useCreateTask } from "@/services/query";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { FormComponent } from "./TaskForm";

export function AddTaskModal({ type = "normal" }: { type?: TaskType }) {
  const [opened, { open, close }] = useDisclosure();

  const { mutateAsync, isPending } = useCreateTask();

  return (
    <>
      <Button onClick={open} leftSection={<IconPlus />}>
        Create a New Task
      </Button>
      <Modal opened={opened} onClose={close} title="Create a New Task">
        <FormComponent
          type={type}
          loading={isPending}
          onCancel={close}
          onSubmit={async (value) => {
            mutateAsync(value).then(() => close());
          }}
        />
      </Modal>
    </>
  );
}
