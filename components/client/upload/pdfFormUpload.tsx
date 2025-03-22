"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { FileUp } from "lucide-react";

const MAX_FILE_SIZE = 30 * 1024 * 1024; 

const fileSchema = z.object({
  file: z
    .instanceof(File, { message: "Please select a file" })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File must be less than 30MB",
    })
    .refine((file) => file.type === "application/pdf", {
      message: "Only PDF files are allowed",
    }),
});

type FormData = z.infer<typeof fileSchema>;

const PdfFormUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(fileSchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("file", file);
      setSelectedFile(file);
      handleSubmit(onSubmit)(); 
    }
  };

  // ✅ Handle Submission
  const onSubmit = (data: FormData) => {
    console.log("File uploaded:", data.file);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <label
        htmlFor="file-upload"
        className="cursor-pointer w-full h-60 mt-5 border-2 border-dashed  border-white rounded-xl p-6 text-center flex flex-col items-center justify-center gap-3 bg-blue-600 text-white">
        <FileUp size={40} className="" />
        <p className=" font-medium">
          {selectedFile
            ? selectedFile.name
            : "Click or Drag & Drop a PDF to Upload"}
        </p>
        <span className="text-sm ">Max 30MB • PDF Only</span>
        <Input
          id="file-upload"
          type="file"
          accept="application/pdf"
          className="hidden"
          {...register("file")}
          onChange={handleFileChange}
        />
      </label>

      {/* ✅ Show Error Message */}
      {errors.file && (
        <p className="text-red-500 mt-2">{errors.file.message}</p>
      )}
    </div>
  );
};

export default PdfFormUpload;
