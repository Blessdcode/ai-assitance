/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PdfFormUpload from "../upload/pdfFormUpload";
import Wrapper from "@/components/custom/wrapper";
import PdfDetails from "@/components/custom/pdfDetails";

const Summary = () => {
  return (
    <div className="space-y-7">
      <>
        <Wrapper
          badgeTitle="AI-Powered Summary"
          text="Upload your PDF and let our trained AI do the magic!"
        />
      </>
      <>
        <PdfFormUpload />
      </>
      <PdfDetails
        image="/ai-summarizer-1.svg"
        title="Automatic Summaries + AI Chat"
        para="You provide the PDF, our document and note summarizer AI automatically gives you the overview and key points. Built-in AI chat lets you go deeper."
      />
    </div>
  );
};

export default Summary;
