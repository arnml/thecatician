"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming shadcn/ui accordion is in this path
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: "item-1",
    question: "What is The Catician?",
    answer:
      "The Catician is a premier cat grooming service dedicated to providing top-notch care for your feline friends. We offer a variety of services to keep your cat looking and feeling their best.",
  },
  {
    id: "item-2",
    question: "What services do you offer?",
    answer:
      "We offer a full range of grooming services, including baths, brushing, nail trimming, haircuts, de-shedding treatments, and ear cleaning. We also offer specialized spa packages.",
  },
  {
    id: "item-3",
    question: "Do you use cat-friendly products?",
    answer:
      "Absolutely! We exclusively use high-quality, cat-safe, and hypoallergenic products to ensure the safety and comfort of your cat during their grooming session.",
  },
  {
    id: "item-4",
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment through our website by visiting the 'Book Now' page or by calling us directly. We recommend booking in advance, especially for weekend slots.",
  },
];

export function FaqSection() {
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-muted-foreground md:text-xl">
            Find answers to common questions about our services.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
          value={openItem}
          onValueChange={setOpenItem}
        >
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium text-foreground data-[state=open]:text-primary">
                {faq.question}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 data-[state=open]:rotate-180 data-[state=open]:text-primary" />
              </AccordionTrigger>
              <AnimatePresence initial={false}>
                {openItem === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  >
                    <AccordionContent className="pt-0 pb-4 text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
