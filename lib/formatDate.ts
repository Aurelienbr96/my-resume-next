import dayjs from "dayjs";
export const formatDate = (date: string) => {
  return date && dayjs(date).isValid()
    ? dayjs(date).format("MMM. YYYY")
    : "Present";
};
