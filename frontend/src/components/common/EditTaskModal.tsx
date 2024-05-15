import { useUpdateTask } from "@/services/query";
import { ActionIcon, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { FormComponent } from "./TaskForm";

type EditTaskModalProps = {
  data: Tasks;
  type?: TaskType;
};

export function EditTaskModal({ data }: EditTaskModalProps) {
  const [opened, { open, close }] = useDisclosure();

  const { mutateAsync, isPending } = useUpdateTask();

  return (
    <>
      <ActionIcon onClick={open} variant="light" size="lg">
        <IconEdit />
      </ActionIcon>
      <Modal opened={opened} onClose={close} title="Edit Task">
        <FormComponent
          data={{ ...data, schedule: new Date(data?.schedule ?? new Date()) }}
          loading={isPending}
          onCancel={close}
          onSubmit={async (value) => {
            mutateAsync({ id: data.id, ...value }).then(() => close());
          }}
          type={"normal"}
        />
      </Modal>
    </>
  );
}
