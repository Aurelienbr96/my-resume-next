import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Textarea } from "../ui/textarea";

type Props<T extends FieldValues> = {
  label?: string;
  placeholder: string;
  description?: string;
  className?: string;
  name: Path<T>;
  control: Control<T> | undefined;
};

export const ControlledTextarea = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  className,
}: Props<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={className}>
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl>
          <Textarea placeholder={placeholder} {...field} />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);
