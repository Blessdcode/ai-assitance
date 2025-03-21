"use client";

import React from "react";
import UploadPdf from "./uploadPdf";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_FILE_SIZE = 35 * 1024 * 1024; 

const fileSchema = z.object({
  file: z
    .instanceof(File, { message: "A file is required" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File must be less than 35MB",
    })
    .refine((file) => file.type === "application/pdf", {
      message: "Only PDF files are allowed",
    }),
});

type FormData = z.infer<typeof fileSchema>;

const FormUpload = () => {
  const {
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(fileSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Valid PDF uploaded:", data.file);
  };

  return (
    <div>
      <UploadPdf
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default FormUpload;
