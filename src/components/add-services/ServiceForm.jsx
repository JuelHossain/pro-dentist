import { Button, Group, Stack, Text, TextInput } from "@mantine/core";
import RichTextEditor from "@mantine/rte";

export default function ServiceForm({ form }) {
  const { getInputProps, submitHandler, errors, loading } = form;

  const editorProps = {
    ...getInputProps("description"),
    className: "max-h-96 overflow-auto",
    controls: [
      ["bold", "link", "image"],
      ["unorderedList", "orderedList", "h3", "h4"],
      ["alignLeft", "alignCenter", "alignRight"],
    ],
  };

  const nameProps = { label: "Service name", placeholder: "Service Name", ...getInputProps("name") };
  const shortProps = { label: "Short Description", placeholder: "maximum 100 character", ...getInputProps("short") };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Stack>
        <TextInput {...nameProps} />
        <TextInput {...shortProps} />

        <div>
          <Text className="font-semibold text-sm">Description</Text>
          <RichTextEditor {...editorProps} />
          <Text size="xs" color="red" mt={2}>
            {errors?.description}
          </Text>
        </div>
        <Group position="right">
          <Button loading={loading} type="submit">
            Send message
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
