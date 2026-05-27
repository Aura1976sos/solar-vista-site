import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long do solar panels typically last?",
    answer: "Most high-quality solar panels are designed to last 25 to 30 years. Even after this period, they will still produce electricity, just at a slightly lower efficiency.",
  },
  {
    question: "Do solar panels work on cloudy days?",
    answer: "Yes! While they are most efficient in direct sunlight, solar panels can still capture sunlight even on cloudy days. They generate energy through light, not heat.",
  },
  {
    question: "How much can I actually save with solar?",
    answer: "Savings depend on your current electricity rates, your system size, and your local sunlight hours. On average, our residential customers save between 70% and 100% on their monthly electric bills.",
  },
  {
    question: "What happens during a power outage?",
    answer: "Standard solar systems without batteries are designed to shut off for safety. If you have a battery storage system like our RowVee PowerBank, you can keep your lights on during an outage.",
  },
  {
    question: "Are there any tax incentives for going solar?",
    answer: "Yes, many governments offer significant tax credits, rebates, and incentives for solar installation. In the US, the Federal Solar Tax Credit (ITC) currently covers 30% of the installation cost.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Expert Answers for Your Solar Journey</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We understand that switching to solar is a big decision. Here are answers to some of the most common questions we receive from our customers.
            </p>
            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-xl mb-4">Still have questions?</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Our solar experts are ready to help you with any specific queries you might have about your property.
              </p>
              <a 
                href="mailto:support@rowvee-solar.com" 
                className="inline-flex items-center font-bold text-primary hover:underline"
              >
                Contact our support team →
              </a>
            </div>
          </div>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border rounded-2xl px-6 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg transition-all"
                >
                  <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}