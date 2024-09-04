/* eslint-disable @next/next/no-img-element */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItem, FormField, FormControl } from "../ui/form";
import { Control, useController } from "react-hook-form";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  className?: string;
  description?: string;
  name: string;
  control: Control<any> | undefined;
};

export const ControlledInputFile = ({
  control,
  name,
  label,
  className,
}: Props) => {
  const {
    field: { onChange },
  } = useController({ name, control });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await convertFileToBase64(file);
      onChange(base64);
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div
            className={cn("flex-col w-full items-center gap-1.5 ", className)}
          >
            {label && <Label htmlFor="picture">{label}</Label>}
            <FormControl>
              <Input
                id="picture"
                type="file"
                className="hover:cursor-pointer"
                accept=".jpg,.png,.jpeg"
                onChange={handleFileChange}
              />
            </FormControl>
            {field.value && <img src={field.value} alt="img" />}
          </div>
        </FormItem>
      )}
    />
  );
};
