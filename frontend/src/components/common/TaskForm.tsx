import { Box, Button, Group, Stack, TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm, zodResolver } from "@mantine/form";
import { IconCalendar } from "@tabler/icons-react";
import * as z from "zod";

type FormComponentProps = {
  type: TaskType;
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

const schema = z.object({
  name: z.string().min(1, { message: "Task title is required!" }),
  schedule: z.date(),
});

export function FormComponent({
  type = "normal",
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

        {type === "schedule" && (
          <DateInput
            leftSection={<IconCalendar />}
            label="Task Date"
            {...form.getInputProps("schedule")}
          />
        )}
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
