// src/components/forms/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (result.success) {
        toast.success('Message sent!', { description: "We'll get back to you soon." });
        reset();
      } else {
        toast.error('Failed to send message', { description: result.message || 'Please try again.' });
      }
    } catch (error) {
      toast.error('Network error', { description: 'Please check your connection.' });
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4"
    >
      <div className="grid gap-1">
        <label className="text-sm font-medium">Full name</label>
        <input
          {...register("full_name")}
          className="h-10 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3"
          placeholder="Jane Doe"
        />
        {errors.full_name && (
          <p className="text-sm text-red-600">{errors.full_name.message}</p>
        )}
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          className="h-10 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3"
          placeholder="jane@example.com"
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-1">
          <label className="text-sm font-medium">Phone (optional)</label>
          <input
            {...register("phone")}
            className="h-10 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3"
            placeholder="+1 555 000 0000"
          />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-medium">Company (optional)</label>
          <input
            {...register("company")}
            className="h-10 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3"
            placeholder="ATSIVA Ltd."
          />
          {errors.company && (
            <p className="text-sm text-red-600">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-medium">Service interest</label>
        <select
          {...register("service_interest")}
          className="h-10 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3"
          defaultValue="solar"
        >
          <option value="solar">Solar</option>
          <option value="automation">Automation</option>
          <option value="telecom">Telecom</option>
          <option value="other">Other</option>
        </select>
        {errors.service_interest && (
          <p className="text-sm text-red-600">{errors.service_interest.message}</p>
        )}
      </div>

      <div className="grid gap-1">
        <label className="text-sm font-medium">Message</label>
        <textarea
          {...register("message")}
          className="min-h-32 rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2"
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Submit
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
