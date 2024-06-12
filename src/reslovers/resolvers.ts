import { z } from "zod";

export const lostItemResolver = z.object({

  category: z.string({ message: "Category field required" }),
  lostItemName: z.string({ message: "Name field required" }),
  description: z.string({ message: "Description field required" }),
  location: z.string({ message: "Location field required" }),
  lostDate: z.string({ message: "Date field required" }),
  photo: z.string().nullable().optional(),
  phoneNumber: z.number().int().nullable().optional(),
  email: z.string().email().nullable().optional(),
});

export const foundItemResolver = z.object({

  category: z.string({ message: "Category field required" }),
  foundItemName: z.string({ message: "Name field required" }),
  photo: z.string().nullable().optional(),
  description: z.string({ message: "Description field required" }),
  location: z.string({ message: "Category field required" }),
  foundDate: z.string({ message: "Category field required" }),
  phoneNumber: z.number().int().nullable().optional(),
  email: z.string().email().optional()
})
