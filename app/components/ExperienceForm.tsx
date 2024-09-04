import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { createExperienceAction } from "@/backend/actions/createExperienceAction";
import { Form } from "@/components/ui/form";
import { ControlledFormInput } from "@/components/enhanched/ControlledFormInput";
import { ControlledDatePicker } from "@/components/enhanched/ControlledDatePicker";
import { ControlledInputFile } from "@/components/enhanched/ControlledInputFile";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ControlledTextarea } from "@/components/enhanched/ControlledTextarea";

const FormSchema = z.object({
  link: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  optLink: z.string(),
  text: z.string(),
  dateFrom: z.date(),
  dateTo: z.date(),
  thumbnail: z.string(),
  company: z.string(),
  role: z.string(),
});

type FormInput = z.infer<typeof FormSchema>;

export const ExperienceForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
  });

  const { toast } = useToast();

  const { handleSubmit } = form;

  const onSubmit = async (data: FormInput) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("link", data.link);
      formData.append("optLink", data.optLink);
      formData.append("text", data.text);
      formData.append("dateFrom", data.dateFrom.toISOString());
      formData.append("dateTo", data.dateTo.toISOString());
      formData.append("thumbnail", data.thumbnail);
      formData.append("company", data.company);
      formData.append("role", data.role);

      await createExperienceAction({ formData });
      toast({
        title: "Your experience has been successfully added",
      });
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnDateFromSelectCallback = () => {
    document.getElementById("end-date-date")?.click();
  };

  const handleOnDateToSelectCallback = () => {
    form.setFocus("text");
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <p>Create an experience</p>

        <ControlledInputFile
          control={form.control}
          name="thumbnail"
          label="An icon of the company"
        />
        <ControlledFormInput
          placeholder="Job title"
          name="role"
          label="Your position at the company/Job title"
          control={form.control}
        />
        <ControlledFormInput
          placeholder="Company name"
          name="company"
          label="Name of your company"
          control={form.control}
        />

        <ControlledDatePicker
          onSelectCallback={handleOnDateFromSelectCallback}
          name="dateFrom"
          label="Start date"
          control={form.control}
        />
        <ControlledDatePicker
          name="dateTo"
          onSelectCallback={handleOnDateToSelectCallback}
          label="End date"
          id="end-date-date"
          control={form.control}
        />

        <ControlledTextarea
          placeholder="Description"
          name="text"
          label="Description of your experience"
          control={form.control}
        />
        <ControlledFormInput
          placeholder="Link to the company"
          name="link"
          label="Link"
          description="Link to your project or company website"
          control={form.control}
        />

        <ControlledFormInput
          placeholder="Optional link"
          name="optLink"
          label="Add an optional link"
          description="Optional link to add more description to your experience"
          control={form.control}
        />

        <Button type="submit">
          {isLoading ? "Creating your experience..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};
