import { TextInput } from "@mantine/core";
import { useServiceFormContext } from "../../../context/service-form-context/serviceFormContext";

export default function Price() {
  const { getInputProps } = useServiceFormContext();

  return <TextInput label="Service Cost" placeholder="Service Cost" {...getInputProps("cost")} />;
}
