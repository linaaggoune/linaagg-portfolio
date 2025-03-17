import { Alert } from "@heroui/alert";

interface AlertProps {
  message: string;
  type?: string;
}

export default function SuccessAlert({ message, type }: AlertProps) {
  return (
    <div className="flex items-center justify-center w-full">
      <Alert description={message} title={type} color="success" />
    </div>
  );
}
