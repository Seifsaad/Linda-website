import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { quoteFormSchema } from "./Quoteformschema";

// TODO: replace with your own EmailJS credentials (from emailjs.com dashboard)
const EMAILJS_SERVICE_ID = "service_k61i4i5";
const EMAILJS_TEMPLATE_ID = "template_zymb60o";
const EMAILJS_PUBLIC_KEY = "V2X2nOjR2E6vA3bf2";

export default function Modal({ isOpen, setIsOpen }) {
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      division: "Manufacturing",
      full_name: "",
      company_name: "",
      email: "",
      requirements: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    try {
      // Note: EmailJS's free tier does not send real file attachments through
      // emailjs.send(). We pass the file name only, so the sales team knows
      // a document was uploaded. If you need the actual file delivered,
      // you'll need EmailJS's paid "attachments" feature or a small backend
      // endpoint that uploads the file and emails a link.
      const fileName =
        data.file && data.file.length > 0
          ? data.file[0].name
          : "No file attached";

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          division: data.division,
          full_name: data.full_name,
          company_name: data.company_name,
          email: data.email,
          requirements: data.requirements,
          file_name: fileName,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      reset();
      setTimeout(() => {
        setSubmitStatus(null);
        setIsOpen(false);
      }, 1800);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus("error");
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-gutter bg-black/60 backdrop-blur-sm overflow-y-auto">
          {/* Click outside backdrop to close */}
          <div
            className="absolute inset-0 cursor-default"
            onClick={() => setIsOpen(false)}
          />

          <div className="modal-container bg-surface-container-lowest w-full max-w-[620px] rounded-lg shadow-2xl overflow-hidden relative border border-machine-gray/10 flex flex-col max-h-[90vh] z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-deep-steel p-6 text-on-primary relative">
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-industrial-red transition-colors duration-200 cursor-pointer"
              >
                <span className="material-symbols-outlined text-headline-md">
                  close
                </span>
              </button>
              <h1 className="font-headline-lg text-headline-md text-white mb-2">
                LINDA GROUP
              </h1>
              <p className="font-body-md text-surface-container-highest opacity-80 text-sm">
                Industrial excellence across borders. Tailored engineering for
                global projects.
              </p>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <header className="mb-6">
                <h2 className="font-headline-md text-headline-md text-deep-steel mb-1">
                  Request a Project Quote
                </h2>
                <p className="text-sm text-on-surface-variant">
                  Connect with technical sales for custom solutions.
                </p>
              </header>

              <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Division Selection */}
                <div className="space-y-3">
                  <label className="font-label-technical text-[12px] text-deep-steel uppercase tracking-wider">
                    Select Primary Division
                  </label>
                  <Controller
                    name="division"
                    control={control}
                    render={({ field }) => (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label
                          onClick={() => field.onChange("Manufacturing")}
                          className={`division-card ${
                            field.value === "Manufacturing"
                              ? "active border-industrial-red"
                              : "border-outline-variant"
                          } cursor-pointer border-2 p-3 rounded-lg flex items-center gap-3 transition-all duration-200 hover:border-deep-steel group`}
                        >
                          <input
                            className="hidden"
                            type="radio"
                            checked={field.value === "Manufacturing"}
                            readOnly
                          />
                          <div className="bg-deep-steel/5 p-2 rounded group-hover:bg-deep-steel/10 transition-colors">
                            <span className="material-symbols-outlined text-deep-steel text-xl">
                              precision_manufacturing
                            </span>
                          </div>
                          <div>
                            <p className="font-headline-md text-sm text-deep-steel leading-tight">
                              Linda Tube
                            </p>
                            <p className="text-[10px] text-on-surface-variant">
                              Manufacturing
                            </p>
                          </div>
                        </label>
                        <label
                          onClick={() => field.onChange("Engineering")}
                          className={`division-card ${
                            field.value === "Engineering"
                              ? "active border-industrial-red"
                              : "border-outline-variant"
                          } cursor-pointer border-2 p-3 rounded-lg flex items-center gap-3 transition-all duration-200 hover:border-deep-steel group`}
                        >
                          <input
                            className="hidden"
                            type="radio"
                            checked={field.value === "Engineering"}
                            readOnly
                          />
                          <div className="bg-deep-steel/5 p-2 rounded group-hover:bg-deep-steel/10 transition-colors">
                            <span className="material-symbols-outlined text-deep-steel text-xl">
                              engineering
                            </span>
                          </div>
                          <div>
                            <p className="font-headline-md text-sm text-deep-steel leading-tight">
                              Linda Engineering
                            </p>
                            <p className="text-[10px] text-on-surface-variant">
                              & Trading
                            </p>
                          </div>
                        </label>
                      </div>
                    )}
                  />
                  {errors.division && (
                    <p className="text-xs text-industrial-red">
                      {errors.division.message}
                    </p>
                  )}
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      className="font-label-technical text-[12px] text-deep-steel uppercase"
                      htmlFor="full_name"
                    >
                      Full Name
                    </label>
                    <input
                      {...register("full_name")}
                      className="w-full border-machine-gray/20 rounded-none focus:ring-0 focus:border-deep-steel text-sm py-2 px-3 transition-colors"
                      id="full_name"
                      placeholder="Enter your full name"
                      type="text"
                    />
                    {errors.full_name && (
                      <p className="text-xs text-industrial-red">
                        {errors.full_name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label
                      className="font-label-technical text-[12px] text-deep-steel uppercase"
                      htmlFor="company_name"
                    >
                      Company Name
                    </label>
                    <input
                      {...register("company_name")}
                      className="w-full border-machine-gray/20 rounded-none focus:ring-0 focus:border-deep-steel text-sm py-2 px-3 transition-colors"
                      id="company_name"
                      placeholder="Enter your company name"
                      type="text"
                    />
                    {errors.company_name && (
                      <p className="text-xs text-industrial-red">
                        {errors.company_name.message}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label
                      className="font-label-technical text-[12px] text-deep-steel uppercase"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      className="w-full border-machine-gray/20 rounded-none focus:ring-0 focus:border-deep-steel text-sm py-2 px-3 transition-colors"
                      id="email"
                      placeholder="Enter your email address"
                      type="email"
                    />
                    {errors.email && (
                      <p className="text-xs text-industrial-red">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-1">
                  <label
                    className="font-label-technical text-[12px] text-deep-steel uppercase"
                    htmlFor="requirements"
                  >
                    Project Requirements
                  </label>
                  <textarea
                    {...register("requirements")}
                    className="w-full border-machine-gray/20 rounded-none focus:ring-0 focus:border-deep-steel text-sm py-2 px-3 transition-colors"
                    id="requirements"
                    placeholder="Enter your project requirements"
                    rows={3}
                  />
                  {errors.requirements && (
                    <p className="text-xs text-industrial-red">
                      {errors.requirements.message}
                    </p>
                  )}
                </div>

                {/* File Upload */}
                <div className="space-y-1">
                  <label className="font-label-technical text-[12px] text-deep-steel uppercase">
                    Upload Inquiry Documents
                  </label>
                  <div className="border-2 border-dashed border-outline-variant p-4 text-center hover:border-deep-steel transition-colors cursor-pointer group rounded-lg">
                    <input
                      {...register("file")}
                      className="hidden"
                      id="file_upload"
                      type="file"
                    />
                    <label
                      className="cursor-pointer flex flex-col items-center gap-1"
                      htmlFor="file_upload"
                    >
                      <span className="material-symbols-outlined text-2xl text-machine-gray group-hover:text-deep-steel transition-colors">
                        upload_file
                      </span>
                      <span className="text-xs text-on-surface-variant group-hover:text-deep-steel transition-colors">
                        Drop files or{" "}
                        <span className="text-deep-steel font-bold underline">
                          browse
                        </span>
                      </span>
                    </label>
                  </div>
                  {errors.file && (
                    <p className="text-xs text-industrial-red">
                      {errors.file.message}
                    </p>
                  )}
                </div>

                {/* Status messages */}
                {submitStatus === "success" && (
                  <p className="text-sm text-green-600 font-medium">
                    Your inquiry was sent successfully. Our team will be in
                    touch shortly.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-industrial-red font-medium">
                    Something went wrong sending your inquiry. Please try again.
                  </p>
                )}

                {/* Footer Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                  <button
                    className="w-full sm:w-auto bg-industrial-red text-white cursor-pointer rounded-lg font-cta-label py-3 px-8 hover:opacity-90 active:scale-95 transition-all shadow-md text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                  <button
                    className="w-full sm:w-auto text-deep-steel rounded-lg font-cta-label py-3 px-8 hover:bg-surface-container transition-colors text-sm cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    id="cancel_btn"
                    type="button"
                  >
                    Cancel
                  </button>
                  <div className="hidden sm:flex ml-auto items-center gap-1 text-outline">
                    <span className="material-symbols-outlined text-[14px]">
                      lock
                    </span>
                    <span className="font-label-technical text-[9px] uppercase">
                      Secure
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
