import {
  ActionIcon,
  Box,
  Button,
  Group,
  Modal,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendar, IconEdit, IconPlus } from "@tabler/icons-react";
import * as z from "zod";
import { useCreateTask, useUpdateTask } from "./query";

const schema = z.object({
  name: z.string().min(1, { message: "Task title is required!" }),
  schedule: z.date(),
});

export function FormAddModal() {
  const [opened, { open, close }] = useDisclosure();

  const { mutateAsync, isPending } = useCreateTask();

  return (
    <>
      <Button onClick={open} leftSection={<IconPlus />}>
        Create a New Task
      </Button>
      <Modal opened={opened} onClose={close} title="Create a New Task">
        <FormComponent
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

export function FormEditModal({ data }: { data: Tasks }) {
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
        />
      </Modal>
    </>
  );
}

type FormComponentProps = {
  loading?: boolean;
  onCancel: () => void;
  onSubmit: (values: Record<string, unknown>) => void;
  data?: Tasks;
};

const initialValues = {
  name: "",
  description: "",
  schedule: new Date(),
};

export function FormComponent({
  onCancel,
  onSubmit,
  loading = false,
  data,
}: FormComponentProps) {
  const form = useForm({
    initialValues: data ?? initialValues,
    validate: zodResolver(schema),
  });

  return (
    <Box component="form" onSubmit={form.onSubmit(onSubmit)}>
      <Stack gap="16px">
        <TextInput
          withAsterisk
          label="Task Title"
          {...form.getInputProps("name")}
        />

        <Textarea label="Description" {...form.getInputProps("description")} />

        <DateInput
          leftSection={<IconCalendar />}
          label="Task Date"
          {...form.getInputProps("schedule")}
        />

        <Group justify="end" gap="16px">
          <Button onClick={onCancel} variant="outline">
            Cancel
          </Button>
          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
