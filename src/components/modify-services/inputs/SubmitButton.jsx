import { Button, Group } from "@mantine/core";
import { useServiceFormContext } from "../../../context/service-form-context/serviceFormContext";

export default function SubmitButton() {
  const { loading } = useServiceFormContext();
  return (
    <Group position="right">
      <Button loading={loading} type="submit">
        Send message
      </Button>
    </Group>
  );
}
