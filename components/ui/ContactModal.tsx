"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button, ButtonProps } from "@/components/ui/Button";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProfile?: string;
  initialPlan?: string;
  initialSolution?: string;
  title?: string;
  subtitle?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  initialProfile,
  initialPlan,
  initialSolution,
  title,
  subtitle,
}: ContactModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
        >
          {/* Backdrop Blur & Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#07224B]/75 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[92vh] flex flex-col z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <div className="absolute top-4 right-4 z-20">
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar formulário de contato"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-mundo-navy flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-mundo-orange"
              >
                <X className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-7 md:p-8">
              <ContactForm
                isModal={true}
                onClose={onClose}
                initialProfile={initialProfile}
                initialPlan={initialPlan}
                initialSolution={initialSolution}
                title={title}
                subtitle={subtitle}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export interface ContactModalButtonProps extends Omit<ButtonProps, "onClick" | "href"> {
  initialProfile?: string;
  initialPlan?: string;
  initialSolution?: string;
  modalTitle?: string;
  modalSubtitle?: string;
}

export function ContactModalButton({
  initialProfile,
  initialPlan,
  initialSolution,
  modalTitle,
  modalSubtitle,
  children,
  ...buttonProps
}: ContactModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        {...buttonProps}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        {children}
      </Button>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialProfile={initialProfile}
        initialPlan={initialPlan}
        initialSolution={initialSolution}
        title={modalTitle}
        subtitle={modalSubtitle}
      />
    </>
  );
}
