import { z } from "zod";

export const quoteFormSchema = z.object({
  division: z.enum(["Manufacturing", "Engineering"], {
    required_error: "Please select a division",
  }),
  full_name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  company_name: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(150, "Company name is too long"),
  email: z.string().email("Enter a valid email address"),
  requirements: z
    .string()
    .min(10, "Please describe your requirements (at least 10 characters)")
    .max(2000, "Requirements are too long"),
  file: z
    .any()
    .optional()
    .refine(
      (files) => !files || files.length === 0 || files[0].size <= 5 * 1024 * 1024,
      "File must be under 5MB"
    ),
});