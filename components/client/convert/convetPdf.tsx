/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PdfFormUpload from "../upload/pdfFormUpload";
import Wrapper from "@/components/custom/wrapper";
import PdfDetails from "@/components/custom/pdfDetails";

const ConvertPdf = () => {
  return (
    <div className="space-y-7">
      <Wrapper
        badgeTitle="PDF Converter"
        text="Upload your PDF and get them converted to any format!"
      />
      <PdfFormUpload />
      <PdfDetails
        image="/ai-summarizer-1.svg"
        title="How Does the Online PDF Converter Work?"
        para="The PDF conversion process makes file handling simple. Drag & drop almost any file format—like Microsoft Word documents, Excel, PPT, or image files—into the tool to create a PDF. You can also convert a PDF back into these formats. Once the file is ready, download it instantly.."
      />
    </div>
  );
};

export default ConvertPdf;
