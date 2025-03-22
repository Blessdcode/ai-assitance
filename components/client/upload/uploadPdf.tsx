import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";



const UploadPdf = () => {
  return (
    <div>
      <form className="flexCol" >
        <div className="flex justify-end items-center gap-1.5">
          <Input
            id="file"
            name="file"
            accept="application/pdf"
            required
            type="file"
            className=""
          />
          <Button className="btn cursor-pointer">Upload PDF</Button>
        </div>
      </form>
    </div>
  );
};

export default UploadPdf;
