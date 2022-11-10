import { FileInput } from "@mantine/core";
import { useServiceFormContext } from "../../../context/service-form-context/serviceFormContext";
import useImageUpload from "../../../hooks/shared/useImageUpload";

export default function Image() {
  const { setValues } = useServiceFormContext();
  const uploadImage = useImageUpload();

  const uploadHandler = async (file) => {
    const imageLink = await uploadImage(file);
    setValues({ imageLink });
  };

  return <FileInput label="Image" placeholder="only jpg and png" onChange={uploadHandler} />;
}
