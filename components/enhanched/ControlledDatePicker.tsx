import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Control } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  name: string;
  control: Control<any> | undefined;
  description?: string;
  className?: string;
  label?: string;
  onSelectCallback?: () => void;
  id?: string;
};

export const ControlledDatePicker = ({
  name,
  control,
  description,
  className,
  label,
  onSelectCallback,
  id,
}: Props) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className={cn("flex flex-col", className)}>
        {label && <FormLabel>{label}</FormLabel>}
        <Popover>
          <PopoverTrigger asChild>
            <FormControl>
              <Button
                id={id}
                variant={"outline"}
                className={cn(
                  "w-[240px] pl-3 text-left font-normal",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={(event) => {
                field.onChange(event);
                onSelectCallback && onSelectCallback();
              }}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);
