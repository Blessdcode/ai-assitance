import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

interface UploadPdfProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UploadPdf = ({ onSubmit}: UploadPdfProps) => {
  return (
    <div>
      <form className="flexCol" onSubmit={onSubmit}>
        <div className="flex justify-end items-center gap-1.5">
          <Input
            id="file"
            name="file"
            accept="application/pdf"
            required
            type="file"
            className=""
          />
          <Button>Upload Pdf</Button>
        </div>
      </form>
    </div>
  );
};

export default UploadPdf;
